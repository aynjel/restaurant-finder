# Restaurant Finder API

A RESTful API built with Node.js, Express, and TypeScript for finding and managing restaurants.

## 🚀 Features

- RESTful API architecture
- TypeScript for type safety
- Express.js web framework
- Environment-based configuration
- Error handling middleware
- Development hot-reload with nodemon
- ESLint and Prettier for code quality

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v9 or higher) - Comes with Node.js
- **TypeScript** (v5.9.3 or higher) - Installed as dev dependency
- **Git** - [Download](https://git-scm.com/)

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd restaurant-finder
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies including:

- Express.js
- TypeScript
- Development tools (nodemon, ts-node, eslint, prettier)

## ⚙️ Environment Setup

### 1. Create Environment File

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Or create it manually with the following content:

```env
# Server Configuration
PORT=3000
NODE_ENV=development
```

### 2. Configure Environment Variables

Edit the `.env` file and set your configuration:

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode: `development` or `production`

## 🏃 Running the Application

### Development Mode

Run the application in development mode with hot-reload:

```bash
npm run dev
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

### Production Mode

1. **Build the TypeScript code:**

```bash
npm run build
```

This compiles TypeScript to JavaScript in the `dist/` directory.

2. **Start the production server:**

```bash
npm start
```

## 📜 Available Scripts

| Script           | Description                              |
| ---------------- | ---------------------------------------- |
| `npm run dev`    | Start development server with hot-reload |
| `npm run build`  | Compile TypeScript to JavaScript         |
| `npm start`      | Start production server                  |
| `npm run lint`   | Run ESLint to check code quality         |
| `npm run format` | Format code using Prettier               |

## 📁 Project Structure

```
restaurant-finder/
├── src/
│   ├── app.ts                 # Express app configuration
│   ├── server.ts              # Server entry point
│   ├── config/
│   │   └── config.ts          # Environment configuration
│   └── middlewares/
│       └── errorHandler.ts    # Error handling middleware
├── dist/                      # Compiled JavaScript (generated)
├── node_modules/              # Dependencies (generated)
├── .env                       # Environment variables (create this)
├── .env.example              # Environment variables template
├── .eslintrc.js              # ESLint configuration
├── .prettierrc               # Prettier configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # This file
```

## 🔌 API Endpoints

### Health Check

**GET** `/api/status`

Check if the server is running.

**Response:**

```json
{
  "status": "ok",
  "message": "Server is running"
}
```

**Example:**

```bash
curl http://localhost:3000/api/status
```

## 🧪 Development Guidelines

### Code Quality

- **Linting:** Run `npm run lint` before committing
- **Formatting:** Run `npm run format` to format code
- **Type Safety:** TypeScript strict mode is enabled

### Adding New Features

1. Create new files in the `src/` directory
2. Follow the existing project structure
3. Export types and interfaces as needed
4. Add error handling for new routes
5. Update this README with new API endpoints

### Environment Variables

- Never commit `.env` file to version control
- Use `.env.example` as a template
- Document new environment variables in this README

## 🐛 Troubleshooting

### Port Already in Use

If you get an error that the port is already in use:

1. Change the `PORT` in your `.env` file
2. Or stop the process using the port:
   - **Windows:** `netstat -ano | findstr :3000` then `taskkill /PID <PID> /F`
   - **Linux/Mac:** `lsof -ti:3000 | xargs kill`

### Module Not Found Errors

If you encounter module resolution errors:

1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Ensure TypeScript is properly configured in `tsconfig.json`

### TypeScript Compilation Errors

1. Check `tsconfig.json` configuration
2. Ensure all dependencies are installed
3. Run `npm run build` to see detailed error messages
