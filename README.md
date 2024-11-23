# YouTube Clone with React, MongoDB, Multer, JWT & Tailwind CSS

link: https://youtube-clone-ten-coral.vercel.app/


This is a **YouTube Clone** built using **React**, **MongoDB**, **Multer**, **JWT (JSON Web Tokens)** for authentication, and **Tailwind CSS** for styling. The application allows users to upload, watch, and interact with videos, providing a similar experience to YouTube with modern tech stack integration.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **User Authentication**: Register and log in using JWT tokens.
- **Video Upload**: Users can upload videos using **Multer** for file handling.
- **Video Streaming**: Users can watch videos embedded from the server.
- **Search Functionality**: Search through video titles.
- **Responsive Design**: Mobile-friendly UI built with **Tailwind CSS**.
- **Video Comments**: Users can comment on videos.
- **Like & Dislike System**: Allows users to like or dislike videos.
- **User Profile**: Users can view and edit their profiles.
- **Protected Routes**: Some features require users to be authenticated (JWT-based).

---

## Technologies Used

- **Frontend**: 
  - **React** - for building the user interface.
  - **React Router** - for managing routes.
  - **Tailwind CSS** - for styling and responsive design.
  - **Axios** - for making HTTP requests.
  
- **Backend**:
  - **Node.js** - backend runtime environment.
  - **Express.js** - web framework for handling API requests.
  - **MongoDB** - NoSQL database for storing user data and video details.
  - **Mongoose** - MongoDB object modeling for Node.js.
  - **JWT (JSON Web Token)** - for user authentication.
  - **Multer** - middleware for handling file uploads (video files).
  - **Bcrypt.js** - for password hashing.

---

## Installation

### 1. Clone the Repository

First, clone this repository to your local machine.


git clone https://github.com/yourusername/youtube-clone.git
cd youtube-clone
  
### 2. Install Backend Dependencies
Navigate to the backend directory and install required packages.


cd backend
npm install

### 3. Install Frontend Dependencies
Navigate to the frontend directory and install required packages.

cd frontend
npm install

### 4. Set Up Environment Variables
Create a .env file in the backend directory and add the following environment variables:

makefile
Copy code
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your Secret Key for JWT>
PORT=5000
Note: You can get a MongoDB URI from MongoDB Atlas or set up a local MongoDB instance.

### 5. Run the Application
Backend:

Run the backend server:

cd backend
npm start
Frontend:

Run the frontend React app:

cd frontend
npm start

## Demo


![Screenshot 2024-11-10 152321](https://github.com/user-attachments/assets/3a32c8ea-fa59-4d1b-87a3-654615ad8874)



![Screenshot 2024-11-10 152341](https://github.com/user-attachments/assets/200390d7-e3f1-4035-87ab-c9cfb409b42e)



![Screenshot 2024-11-10 153350](https://github.com/user-attachments/assets/dfa6e992-77b8-40c0-be78-89a37e9c815d)

