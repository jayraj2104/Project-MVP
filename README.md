# MERN Task Management Application

A full-stack task management MVP built with MongoDB, Express.js, React, Vite, Node.js, JWT authentication, bcrypt password hashing, protected routes, and user-specific task CRUD operations.

## Features

- User registration and login
- Password hashing with bcryptjs
- JWT-based authentication
- Protected backend task routes
- Protected frontend routes
- Token persistence with localStorage
- Automatic logout cleanup on invalid tokens
- Create, read, update, and delete tasks
- User-specific task ownership
- MongoDB persistence with Mongoose
- Axios service layer for API integration
- Pure CSS styling

## Tech Stack

Frontend:
- React + Vite
- React Router DOM
- Axios
- Pure CSS

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token
- bcryptjs

## Project Structure

```text
Project-MVP/
  Backend/
    config/
    controllers/
    middleware/
    models/
    routes/
    server.js
    package.json
    .env.example
  client/
    src/
      routes/
      services/
      views/
      styles/
      presenters/
    package.json
    .env.example
```

## Environment Variables

Create a `Backend/.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
JWT_SECRET=replace_with_a_long_random_secret
CLIENT_URL=http://localhost:5173
```

Create a `client/.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

## Installation

Install backend dependencies:

```bash
cd Backend
npm install
```

Install frontend dependencies:

```bash
cd client
npm install
```

## Run Locally

Start MongoDB locally, then run the backend:

```bash
cd Backend
npm run dev
```

Run the frontend in another terminal:

```bash
cd client
npm run dev
```

Default local URLs:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000/api`

## API Routes

Authentication:
- `POST /api/auth/register`
- `POST /api/auth/login`

Tasks:
- `GET /api/tasks`
- `POST /api/tasks`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

All task routes require:

```http
Authorization: Bearer <token>
```

## Available Scripts

Backend:

```bash
npm run dev
npm start
```

Frontend:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Verification

The project has been verified for:

- Frontend production build
- Frontend linting
- Backend startup
- MongoDB connection
- User registration
- User login
- Protected task access
- Task create, update, delete flow
- User-owned task persistence

## Deployment Notes

Before deploying:

- Use a strong production `JWT_SECRET`
- Use a hosted MongoDB database such as MongoDB Atlas
- Set production `CLIENT_URL` and `VITE_API_URL`
- Keep `.env` files out of Git
- Configure CORS for the deployed frontend domain
- Run `npm run build` inside `client`

## Future Improvements

- Add rate limiting for auth routes
- Add Helmet security headers
- Add automated backend API tests
- Add toast notifications instead of browser alerts
- Add dashboard stats from real task data
- Add loading and error states per task action
- Add password reset flow

## Project Status

This is an internship-ready MERN MVP with authentication, protected routes, MongoDB persistence, and task ownership. It is suitable for a resume or portfolio after deployment and README screenshots are added.
