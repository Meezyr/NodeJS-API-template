# NodeJS API Template

## Description

This repository provides a template for creating a Node.js API using Express. It includes a basic structure with some essential features and configurations to help you get started quickly with building your API.

## Features

- **Express Framework**: A fast, unopinionated, minimalist web framework for Node.js.
- **Environment Configuration**: Easily manage different environments (development, testing, production).
- **Routing**: Basic routing structure to organize your API endpoints.
- **Middleware**: Common middleware setup for logging, parsing, and error handling.
- **Sample Endpoints**: Example endpoints to demonstrate how to structure your routes.
- **Utilities**: Helper functions for various tasks (e.g., error handling, response formatting).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Meezyr/NodeJS-API-template.git
    cd NodeJS-API-template
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

### Configuration

1. Duplicate `.env` and create a `.env.local` file in the root directory and add your custom environment variables.
2. Create `src/assets` and `src/assets/logs` directories.

### Running the Application

1. Start the development server:

    ```bash
    npm run start
    ```

2. The API will be accessible at `http://localhost:3000`.


## Project Structure

```
.
├── src
│   ├── assets
│   │   └── logs
│   │       └── combined.log     # API log file
│   ├── config
│   │   ├── database.js          # Database configuration
│   │   ├── jwt.js               # JWT and tokens configuration
│   │   ├── logger.js            # Logger configuration
│   │   ├── routes.js            # Route configuration
│   │   └── wrappersAxios.js     # Axios wrappers configuration
│   ├── controllers
│   │   └── authControllers.js   # Authentication controller
│   ├── middlewares
│   │   ├── auth
│   │   │   ├── auth.js          # Authentication dispatcher middleware
│   │   │   ├── exampleAuth.js   # Example authentication middleware
│   │   │   ├── selfAuth.js      # Self authentication middleware
│   │   │   └── userAuth.js      # User authentication middleware
│   │   └── right
│   │       └── verifyRight.js   # Verify user rights middleware
│   ├── models
│   │   └── userModels.js        # Initialize user model
│   ├── routes
│   │   └── authRoutes.js        # Authentication route
│   │   └── exampleRoutes.js     # Example route
│   ├── services
│   │   └── exampleServices.js   # Example service
│   └── utils
│       └── arrayUtils.js        # Manipulate array util
├── app.js                       # Entry point
├── .env                         # Base environment variables
├── .gitignore                   # Git ignore file
├── favicon.ico                  # Default favicon
├── package.json                 # Project dependencies and scripts
└── README.md                    # Project documentation
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Dependencies

- [Express](https://www.npmjs.com/package/express)
- [Axios](https://www.npmjs.com/package/axios)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Body parser](https://www.npmjs.com/package/body-parser)
- [Cors](https://www.npmjs.com/package/cors)
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [MariaDB](https://www.npmjs.com/package/mariadb)
- [Node forge](https://www.npmjs.com/package/node-forge)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [Serve favicon](https://www.npmjs.com/package/serve-favicon)
- [Winston](https://www.npmjs.com/package/winston)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Nodemon](https://www.npmjs.com/package/nodemon)

---

Feel free to customize this template to better fit the specifics of your project.
