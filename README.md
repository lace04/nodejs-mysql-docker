## Docker Compose Nodejs MysqL

This project demonstrates how to use Docker Compose to deploy a Node.js application with a MySQL database.

The application is a simple Express app that returns the current time. It connects to the MySQL database to store the current time.

The Docker Compose file defines two services:

mysqldb: A MySQL database service.
app: A Node.js application service.
The app service depends on the mysqldb service. This means that the app service will not start until the mysqldb service is up and running.

The app service also links to the mysqldb service. This means that the app service can communicate with the mysqldb service.

To run the application, follow these steps:

Clone the repository.
Install Docker and Docker Compose.
Create a .env file and set the following environment variables:
MYSQLDB_USER: The username for the MySQL database.
MYSQLDB_PASSWORD: The password for the MySQL database.
MYSQLDB_DATABASE: The name of the MySQL database.
NODE_LOCAL_PORT: The port that the Node.js application will listen on.
MYSQLDB_LOCAL_PORT: The port that the MySQL database will listen on.
Run the following command:
docker-compose up


The application will be started and will be available on port `NODE_LOCAL_PORT`.

To stop the application, run the following command:

docker-compose down


## Dependencies

* Node.js
* Docker
* Docker Compose


### Commands

```sh
docker-compose up # to execute development
docker-compose -f docker-compose.prod.yml up # to execute production
```