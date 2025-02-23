# MERN CRUD Application

This project is a full-stack CRUD (Create, Read, Update, Delete) application built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Features
- Create, Read, Update, and Delete operations on a MongoDB database.
- REST API using Express and Node.js.
- Frontend built with React.js.
- State management using React hooks.
- Database connection using Mongoose.
- API testing using Postman.

## Technologies Used
- **Frontend:** React.js, Axios, Bootstrap
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running

### Clone the Repository
```sh
git clone https://github.com/your-repo/mern-crud.git
cd mern-crud
```

### Backend Setup
```sh
cd backend
npm install
```

#### Create a `.env` file in the backend folder
```sh
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

#### Run the Server
```sh
npm start
```

### Frontend Setup
```sh
cd frontend
npm install
npm start
```

## API Endpoints

### Base URL
`http://localhost:5000/api`

### Create an Item
**POST** `/items`
```json
{
  "name": "Item Name",
  "description": "Item Description"
}
```

### Get All Items
**GET** `/items`

### Get a Single Item
**GET** `/items/:id`

### Update an Item
**PUT** `/items/:id`
```json
{
  "name": "Updated Name",
  "description": "Updated Description"
}
```

### Delete an Item
**DELETE** `/items/:id`

## Folder Structure
```
mern-crud/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   ├── .env
├── frontend/
│   ├── src/
│   ├── components/
│   ├── App.js
│   ├── index.js
├── README.md
```

## License
This project is licensed under the MIT License.

## Author
[Samiran_Biswas](https://github.com/samiran-biswas/)

