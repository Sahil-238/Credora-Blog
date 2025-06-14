# Credora Blog Backend

This is the backend server for the Credora Blog application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a .env file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/credora-blog
JWT_SECRET=your-secret-key
NODE_ENV=development
```

3. Start the development server:
```bash
npm run dev
```

## Project Structure

```
backend/
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middleware
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── utils/         # Utility functions
│   └── server.js      # Entry point
├── .env               # Environment variables
├── package.json       # Project dependencies
└── README.md         # This file
```

## API Endpoints

- `GET /` - Welcome message
- More endpoints coming soon...

## Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with hot reload
- `npm test` - Run tests 