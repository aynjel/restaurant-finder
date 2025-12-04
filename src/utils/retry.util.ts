import { defer, Observable, throwError, timer } from 'rxjs';
import { catchError, mergeMap, retryWhen } from 'rxjs/operators';

function isRetryableError(error: any): boolean {
  if (
    error?.code === 'ECONNREFUSED' ||
    error?.code === 'ETIMEDOUT' ||
    error?.code === 'ENOTFOUND' ||
    error?.message?.includes('network') ||
    error?.message?.includes('timeout')
  ) {
    return true;
  }

  if (error?.status >= 500 && error?.status < 600) {
    return true;
  }

  if (error?.response?.status >= 500 && error?.response?.status < 600) {
    return true;
  }

  if (error?.message?.includes('Internal Server Error')) {
    return true;
  }

  return false;
}

export interface RetryOptions {
  maxRetries?: number;
  initialDelay?: number;
  maxDelay?: number;
  exponentialBackoff?: boolean;
}

const DEFAULT_OPTIONS: Required<RetryOptions> = {
  maxRetries: 3,
  initialDelay: 1000,
  maxDelay: 10000,
  exponentialBackoff: true,
};

export function withRetry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {},
): Promise<T> {
  const config = { ...DEFAULT_OPTIONS, ...options };

  return new Promise<T>((resolve, reject) => {
    defer(() => fn())
      .pipe(
        retryWhen((errors: Observable<any>) =>
          errors.pipe(
            mergeMap((error, attemptIndex) => {
              const attempt = attemptIndex + 1;

              if (!isRetryableError(error)) {
                return throwError(() => error);
              }

              if (attempt > config.maxRetries) {
                console.error(
                  `Retry failed after ${config.maxRetries} attempts:`,
                  error,
                );
                return throwError(() => error);
              }

              const delay = config.exponentialBackoff
                ? Math.min(
                    config.initialDelay * Math.pow(2, attemptIndex),
                    config.maxDelay,
                  )
                : config.initialDelay;

              console.log(
                `Retry attempt ${attempt}/${config.maxRetries} after ${delay}ms`,
              );

              return timer(delay);
            }),
          ),
        ),
        catchError((error) => {
          return throwError(() => error);
        }),
      )
      .subscribe({
        next: (value) => resolve(value),
        error: (error) => reject(error),
      });
  });
}
