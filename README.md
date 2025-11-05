# Task App

## Requirements

- Node.js (https://nodejs.org)

## 1. Project Overview

This is a Task Management application with categories that allows creating, editing, and deleting tasks.  
The application consists of:

- **Backend**: Node.js (v22.9.0) with Express, SQLite database, and Swagger UI for API documentation
- **Frontend**: Angular (v16.2.4) application with dynamic components and animations

**Key Features:**

- CRUD operations for tasks and categories
- Task categorization
- Dynamic task components with blur-fade animation
- Swagger UI for API documentation

## 3. Installation

### Backend

1. Navigate to the server folder: **cd server**
2. Install dependencies: **npm install**
3. Create a .env file which contains (normally not in Readme :D): **PORT=3000**
4. Start the backend server (with nodemon): **npm start**
5. SQLite DB gets created, connected and filled up with mockdata (from server/src/mockdata.js)
6. Now you can access the Swagger UI for checking and testing the API at: (http://localhost:3000/api-docs)

### Frontend

1. Navigate to the client folder: **cd client**
2. Install dependencies: **npm install**
3. Start the Angular application: **npm run start**
4. Now you can access the frontend at: (http://localhost:4200)

## 4. Features

- Display tasks by category
- Add, edit, and delete tasks
- Animated task addition (blur → fade transition)
- Responsive design
- Swager API documentation

## 5. Future improvements

- Drag-and-drop tasks between categories
- Inline editing for tasks
- Persist animation states
- Advanced filtering and sorting options

Keep in mind this app is under construction...
