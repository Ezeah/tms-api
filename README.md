# Task Management API

This is a REST API for a task management application built with NestJS. It includes user authentication and task management capabilities.

## Overview

The API provides endpoints for:

- Fetching all tasks
- Creating a new task 
- Getting a single task
- Updating a task
- Deleting a task

The code is structured using NestJS conventions:

- Modules organize related functionality
- Controllers handle endpoints
- Services contain business logic
- DTOs define data transfer objects

## Running the API

Requirements:
- Node.js
- npm

## Installation
Clone the repository.

```bash
# Install dependencies
npm install
``` 

```bash
# Run in development mode or locally
npm run start:dev
```

The API will be available at http://localhost:3000.

## Testing
The API has unit and integration tests written with Jest.

```bash
# Run tests
npm run test
```

## Features
JWT authentication for users
CRUD operations on tasks
Validation for requests
Error handling

## Endpoints
POST /auth/login - Authenticate user and get JWT token
POST /tasks - Create a new task (requires JWT)
GET /tasks - Get all tasks for authenticated user (requires JWT)
GET /tasks/:id - Get a specific task (requires JWT)
PUT /tasks/:id - Update a task (requires JWT)
DELETE /tasks/:id - Delete a task (requires JWT)

## Data Models
User - Stores user authentication details
Task - Stores task details and relates to a user

## Deployment
Build and deploy the NestJS app to a hosting platform of your choice.

