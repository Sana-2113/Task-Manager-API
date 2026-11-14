# Task Manager API

## Project Description
This project is a Task Manager application built using Node.js and Express.js.

It contains three parts:
- Part A: Command Line Interface (CLI)
- Part B: HTTP Server using Node.js
- Part C: REST API using Express.js

## Technologies Used
- JavaScript
- Node.js
- Express.js

## Installation
1. Clone the repository.
2. https://github.com/Sana-2113/Task-Manager-API.git
3. Open the project folder.
4. Run the following command:

npm install

## Part A - CLI
Run:

node part-a-cli/task-cli.js "Complete homework"

## Part B - HTTP Server
Run:

node part-b-http-server/server.js

Server runs on port 3000.

## Part C - Express API
Run:

node part-c-express/app.js

Server runs on port 4000.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | Get all tasks |
| GET | /tasks/:id | Get task by ID |
| POST | /tasks | Create a task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

### Part C- Express API Endpoints (Port 4000)
|Method | Endpoint | Description |
|--------|----------|-------------|
|GET|/api/v1/tasks|Get all tasks|
|GET|/api/v1/tasks/:id|Get task by ID|
|POST|/api/v1/tasks|Create a task|
|PUT|/api/v1/tasks/:id|Update a task|
|DELETE|/api/v1/tasks/:id|Delete a task|


## Response Format

All APIs return:
- message
- success
- data

## HTTP Status Codes
- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found

## Author
Task Manager API Assignment
