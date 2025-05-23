## Sports Network

A Comprehensive High School Sports Platform
Sports Network is a centralized platform for high school sports information, providing real-time access to fixtures, results, live updates, and detailed information about schools and their sports programs. The platform serves as a hub for students, parents, coaches, and sports enthusiasts to stay updated with high school sports activities.

## Table of Contents

- Features
- Supported Sports
- Technology Stack
- Prerequisites
- Installation
- Setting Up the Database
- Setting Up the Backend
- Setting Up the Frontend
- Running the Application
- Project Structure
- API Documentation


# Features
For Visitors
- Latest News and Updates: Access the most recent blogs, news, and updates about high school sports
- Upcoming Events: View highlighted fixtures and major events
- Sports Listings: Browse through different sports categories
- School Profiles: Explore detailed information about participating schools
- Search Functionality: Easily find specific schools or sports
- Mobile Responsiveness: Access the platform on any device

# For Sports Enthusiasts
- Fixtures and Results: View current fixtures and past results for each sport
- Live Updates: Get real-time updates during ongoing matches
- Player Lineups: See which players are participating in specific games
- Sport-specific Statistics: Access detailed statistics for each sport

# For School Administrators
- School Registration: Register and manage school profiles
- Sports Management: Update information about the school's sports programs
- Results Reporting: Report match results and update statistics
- Content Management: Post news and updates related to the school

## Supported Sports
Sports Network currently supports the following high school sports:

Cricket 🏏
Athletics 🏃‍♂️
Tennis 🎾
Swimming 🏊‍♂️
Cross Country 🏞️
Squash 🎯
Rugby 🏉
Soccer ⚽
Hockey 🏑


## Technology Stack 

# Frontend
Framework: Next.js (React)
Styling: Tailwind CSS
State Management: React Context API
Authentication: JWT (JSON Web Tokens)
UI Components: shadcn/ui

# Backend
- Runtime: Node.js
- Framework: Express.js
- Database: MySQL
- Authentication: JWT, bcrypt
- Validation: Express Validator

# Development Tools
- Version Control: Git
- Package Manager: npm
- Code Quality: ESLint, Prettier
- API Testing: Postman

# Prerequisites
Before setting up the project, ensure you have the following installed:
- Node.js (v16 or later)
- npm (v7 or later)
- MySQL (v8 or later)
- Git (optional, for version control)


## Setting Up My Environment 

# Create a project directory
mkdir sports-network
cd sports-network

# Initialize the project
npm init -y

# Create directories for frontend and backend
mkdir client server

# Install backend dependencies
cd server
npm init -y
npm install express mysql2 cors dotenv bcrypt jsonwebtoken nodemon

# Initialize the frontend React app
cd ../client
npx create-react-app .
npm install axios react-router-dom tailwindcss @headlessui/react

# Set up Tailwind CSS
npx tailwindcss init

# running backend
navigate to server then server.js is located
node server.js

# running frontend

npm start 
npm run dev


## API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/auth/me` - Get current user (protected)
- `PUT /api/auth/profile` - Update user profile (protected)
- `PUT /api/auth/password` - Change user password (protected)


### Sports Endpoints

- `GET /api/sports` - Get all sports
- `GET /api/sports/:identifier` - Get sport by ID or slug
- `POST /api/sports` - Create a new sport (admin only)
- `PUT /api/sports/:id` - Update a sport (admin only)
- `DELETE /api/sports/:id` - Delete a sport (admin only)
- `GET /api/sports/:id/schools` - Get schools by sport ID
- `GET /api/sports/:id/fixtures` - Get fixtures by sport ID
- `GET /api/sports/:id/top-schools` - Get top schools by sport ID

### Schools Endpoints

- `GET /api/sports/schools/all` - Get all schools
- `GET /api/sports/schools/:id` - Get school by ID
- `POST /api/sports/schools` - Create a new school (admin only)
- `PUT /api/sports/schools/:id` - Update a school (admin or school admin)

# Sports-Network

sports-network/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── sportsController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── School.js
│   │   └── Sport.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── sportsRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── server.js
│   └── package.json
└── frontend/
    ├── public/
    ├── app/
    │   ├── components/
    │   │   ├── Header.tsx
    │   │   ├── Footer.tsx
    │   │   ├── SportsList.tsx
    │   │   ├── SchoolProfile.tsx
    │   │   └── Login.tsx
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── ...other pages
    ├── components/
    │   ├── ui/
    │   └── ...other components
    ├── lib/
    │   └── utils.ts
    └── package.json