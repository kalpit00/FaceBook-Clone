# Facebook Clone

A full-stack Facebook clone application with a React/Next.js frontend and Spring Boot backend.

![Facebook Clone](https://via.placeholder.com/800x400?text=Facebook+Clone)

## Project Overview

This project is a comprehensive clone of Facebook's core features, built with modern web technologies. It demonstrates a full-stack application with a responsive frontend and a robust backend API.

## Features

- **User Authentication**: Sign up, login, and profile management
- **News Feed**: View, create, like, and comment on posts
- **Friend System**: Send/accept friend requests and view friends list
- **Profiles**: View and edit user profiles
- **Responsive Design**: Works on mobile, tablet, and desktop

## Tech Stack

### Frontend
- **Next.js 14** - React framework
- **React 18** - UI library
- **Redux Toolkit** - State management
- **Tailwind CSS** - Styling
- **Next Auth** - Authentication
- **Axios** - API requests

### Backend
- **Spring Boot 3.3.1** - Java framework
- **Spring Data JPA** - Data access
- **MySQL** - Database
- **Lombok** - Boilerplate code reduction
- **Maven** - Dependency management

## Repository Structure

- `facebook-clone/` - Frontend Next.js application
- `facebook-clone-service/` - Backend Spring Boot service

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- JDK 17 or later
- MySQL Database
- npm/yarn and Maven

### Running the Application

#### Backend

1. Navigate to the backend directory:
   ```bash
   cd facebook-clone-service
   ```

2. Configure the database in `src/main/resources/application.properties`

3. Build and run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

The backend will start on `http://localhost:8080`.

#### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd facebook-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables in `.env.local`

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The frontend will start on `http://localhost:3000`.

## API Documentation

The backend provides RESTful API endpoints for:

- User management
- Authentication
- Posts and comments
- Friend requests
- Likes and reactions

Detailed API documentation can be found in the backend README.

## Deployment

### Backend

The Spring Boot application can be deployed as a JAR file to any Java-enabled server.

### Frontend

The Next.js application can be deployed to Vercel or any other hosting platform that supports Next.js.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
