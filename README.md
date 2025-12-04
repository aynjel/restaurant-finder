# Restaurant Finder API

A RESTful API built with Node.js, Express, and TypeScript for finding and managing restaurants.

## 🌐 Live Demo

**Deployed on Vercel:** [https://restaurant-finder-jade.vercel.app/](https://restaurant-finder-jade.vercel.app/)

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

# API Keys (Required for restaurant search functionality)
FOURSQUARE_API_KEY=your_foursquare_api_key_here

# Optional: API Keys
OPENAI_API_KEY=your_openai_api_key_here

# Optional: Access Code (defaults to 'pioneerdevai')
REQUIRED_CODE=pioneerdevai
```

### 2. Configure Environment Variables

Edit the `.env` file and set your configuration:

- `PORT` - Server port (default: 3000)
- `FOURSQUARE_API_KEY` - Your Foursquare Places API key (required for restaurant search)
- `OPENAI_API_KEY` - Your OpenAI API key (optional, currently not used in the implementation)
- `REQUIRED_CODE` - Access code for API authentication (optional, defaults to `pioneerdevai`)

**Getting API Keys:**

- **Foursquare API Key:** Sign up at [Foursquare Developer Portal](https://developer.foursquare.com/) and create an API key
- **OpenAI API Key:** Sign up at [OpenAI Platform](https://platform.openai.com/) and create an API key (optional)

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
│   ├── controllers/
│   │   └── restaurant.controller.ts  # Restaurant search controller
│   ├── middlewares/
│   │   └── errorHandler.middleware.ts  # Error handling middleware
│   ├── models/
│   │   ├── apiParams.model.ts      # API parameters type definitions
│   │   └── apiResponse.model.ts    # API response type definitions
│   └── utils/
│       └── helpers.ts         # Utility functions (validation, data cleaning)
├── .api/                      # Generated API client (Foursquare Places API)
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
# Local development
curl http://localhost:3000/api/status

# Production (Vercel)
curl https://restaurant-finder-jade.vercel.app/api/status
```

### Restaurant Search

**GET** `/api/restaurants`

Search for restaurants using the Foursquare Places API. This endpoint queries the Foursquare Places database to find restaurants matching your search criteria.

**Query Parameters:**

- `message` (required) - Search query term (e.g., "sushi", "pizza", "italian restaurant")
- `near` (required) - Location to search near (e.g., "downtown Los Angeles", "New York", "San Francisco")
- `code` (required) - Access code: `pioneerdevai` (or the value set in `REQUIRED_CODE` environment variable)
- `price` (optional) - Price level filter: `1` (cheap), `2` (moderate), `3` (expensive), `4` (very expensive)
- `open_now` (optional) - Filter for restaurants currently open: `true` or `false`

**Response:**

```json
[
  {
    "name": "Sushi Restaurant Name",
    "website": "https://example.com",
    "location": {
      "address": "123 Main St",
      "locality": "Los Angeles",
      "region": "CA",
      "postcode": "90001",
      "country": "US",
      "formatted_address": "123 Main St, Los Angeles, CA 90001"
    },
    "social_media": {
      "facebook_id": "123456789"
    },
    "distance": 500,
    "categories": ["Japanese Restaurant", "Sushi Restaurant"],
    "email": "info@example.com",
    "tel": "+1234567890"
  }
]
```

**Example:**

```bash
# Local development - Basic search
curl "http://localhost:3000/api/restaurants?message=sushi&near=downtown%20Los%20Angeles&code=pioneerdevai"

# Local development - With optional filters
curl "http://localhost:3000/api/restaurants?message=pizza&near=New%20York&code=pioneerdevai&price=2&open_now=true"

# Production (Vercel)
curl "https://restaurant-finder-jade.vercel.app/api/restaurants?message=sushi&near=downtown%20Los%20Angeles&code=pioneerdevai"
```

**Browser Example:**

You can also access this endpoint directly in your browser:

```
https://restaurant-finder-jade.vercel.app/api/restaurants?message=sushi&near=downtown%20Los%20Angeles&code=pioneerdevai
```

**Error Responses:**

- **401 Unauthorized** - Invalid or missing `code` parameter
- **400 Bad Request** - Missing or invalid `message` or `near` parameter
- **500 Internal Server Error** - Server error (check API keys configuration)

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

### ES Module Import Errors

If you encounter `ERR_UNSUPPORTED_DIR_IMPORT` errors after building:

1. This may occur with generated API client files in the `.api/` directory
2. Ensure imports use explicit file paths (e.g., `'api/dist/core/index.js'` instead of `'api/dist/core'`)
3. Rebuild the project: `npm run build`

### TypeScript Compilation Errors

1. Check `tsconfig.json` configuration
2. Ensure all dependencies are installed
3. Run `npm run build` to see detailed error messages
