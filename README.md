# NetWorth Tracker API

NetWorth Tracker API is a backend service built using Hapi.js and PostgreSQL, designed to manage user financial data efficiently. The API is containerized using Docker (partially set up) and follows best practices for scalability and maintainability.

## Features
- User authentication and authorization
- Secure financial data management
- PostgreSQL integration with Sequelize ORM
- Hapi.js as the backend framework
- Docker containerization (partially implemented)
- Jest for testing

## Tech Stack
- **Backend**: Hapi.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Containerization**: Docker (partial setup)
- **Testing**: Jest

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v20.12.1 recommended)
- [PostgreSQL](https://www.postgresql.org/) (running on port 5432)
- [Docker](https://www.docker.com/) (optional for containerization)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/networth-tracker-api.git
   cd networth-tracker-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure the database:
   Update `config/config.json` with your PostgreSQL credentials.

4. Run database migrations:
   ```sh
   npx sequelize db:migrate
   ```

### Running the Server

Start the API server:
```sh
npm start
```
The server runs on `http://localhost:53453` by default.

### Running Tests
To execute tests:
```sh
npm test
```

### Docker Setup (Partial)
1. Build the Docker image:
   ```sh
   docker build -t networth-tracker-api .
   ```
2. Run the container:
   ```sh
   docker run -p 53453:53453 networth-tracker-api
   ```
> Note: Further improvements are required for full Dockerization.

## Future Improvements
- Complete Docker integration
- Implement CI/CD pipeline
- Enhance security with OAuth
- Expand API functionality



