# Facebook Clone Backend Service

This is the backend service for the Facebook Clone application, built with Spring Boot.

## Technologies Used

- **Java 17**
- **Spring Boot 3.3.1**
- **Spring Data JPA**
- **MySQL Database**
- **Lombok**
- **Maven**

## Getting Started

### Prerequisites

- JDK 17 or later
- MySQL Database
- Maven

### Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kalpit00/FaceBook-Clone.git
   cd FaceBook-Clone/facebook-clone-service
   ```

2. Configure the database connection in `src/main/resources/application.properties` or `application.yml`.

3. Build the project:
   ```bash
   ./mvnw clean install
   ```

4. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

The backend service will start running on `http://localhost:8080`.

## API Endpoints

The service provides the following RESTful API endpoints:

- **User Management**: Authentication, registration, profile management
- **Posts**: Create, read, update, delete posts
- **Comments**: Add, view, edit, delete comments
- **Likes**: Like/unlike posts and comments
- **Friends**: Send/accept friend requests, view friends list

## Project Structure

- `src/main/java/com/kalpit00/facebookcloneservice/` - Main source code
  - `controller/` - REST controllers
  - `model/` - Entity classes
  - `repository/` - Data access layer
  - `service/` - Business logic
  - `config/` - Configuration classes
  - `exception/` - Custom exceptions and error handling

## Development

### Adding New Features

1. Create the entity class in the `model` package
2. Create a repository interface in the `repository` package
3. Implement the service layer in the `service` package
4. Create a controller in the `controller` package

### Running Tests

```bash
./mvnw test
```

## Deployment

The application can be packaged as a JAR file and deployed to any Java-enabled server:

```bash
./mvnw package
java -jar target/facebook-clone-service-0.0.1-SNAPSHOT.jar
```

## Contributing

Please follow the standard Git workflow:

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License.
