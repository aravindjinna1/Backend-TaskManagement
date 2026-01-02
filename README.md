
# => Task Management Application (MERN Stack)

## API Documentation

The Postman collection for this project is available here:  
`/postman/TaskManagement.postman_collection.json` 


You can import it in Postman to test all APIs:
- Register & Login
- Protected routes
- Task Posting
- CRUD operations
- Role-based access (Admin/User)


##  Project Overview

This project is a **Task Management Application** built as part of a **Backend Developer Intern assignment**.
The application focuses on building **secure, scalable REST APIs** with **JWT-based authentication**, **role-based access control**, and a **basic frontend UI** to demonstrate API functionality.

The system supports **Admin and User roles**, where:

* **Admins** can access the admin panel and manage all tasks
* **Users** can manage only their own tasks
* Protected routes ensure secure access across the application

##  Tech Stack

### Backend

* **Node.js**
* **Express.js**
* **MongoDB** (Mongoose)
* **JWT (JSON Web Token)** for authentication
* **bcrypt** for password hashing
* **Postman** for API documentation

### Frontend

* **React.js**
* **Tailwind CSS**
* **Axios**

### Deployment

* **Backend deployed on Render**
  
* **Frontend deployed on Vercel**
---

=> ** Application Live Demo : https://task-management-rho-green.vercel.app/  ** 

##  Features

###  Authentication & Authorization

* User Registration & Login
* Password hashing using **bcrypt**
* JWT-based authentication
* Protected routes using middleware

###  Role-Based Access Control

* **Admin**:

  * Can access admin panel
  * Can view and manage all tasks
* **User**:

  * Cannot access admin panel
  * Can manage only their own tasks

###  Task Management (CRUD)

* Create Task
* Read Tasks
* Update Task
* Delete Task

###  API Handling

* Proper HTTP status codes
* Centralized error handling
* Input validation

---

##  API Documentation

The complete **Postman API collection** is available in the backend repository.

At Postman Folder  =>
/postman/Task-Management-API.postman_collection.json


### How to use:

1. Import the collection into Postman
2. Set `base_url` (local or Render URL)
3. Run Register → Login → Protected APIs
4. at registration their have two options one it by default user then we can choose as admin 
5. a person can add the task after successfully login
6. a admin can only access to adminPanel page

---

##  Live Backend URL

```
https://taskmanagement-backend-ona0.onrender.com
```

---

##  Environment Variables

Create a `.env` file in the backend root with the following variables:

```env
PORT=5000
MONGO_URI=mongodb+srv://aravindjinna1_db_user:aravindjinna123@cluster0.louj41q.mongodb.net/
JWT_SECRET=my_jwt_secret
```

> `.env` file is not committed to GitHub for security reasons.

---

##  Local Setup Instructions

### Backend Setup

```bash
git clone  https://github.com/aravindjinna1/Backend-TaskManagement
npm install
npm start
```

Server will run on:

```
https://taskmanagement-backend-ona0.onrender.com

```

---

### Frontend Setup

git clone  https://github.com/aravindjinna1/Frontend-TaskManagement
cd task-management-frontend
npm install
npm run dev


---

##  Frontend–Backend Integration

The frontend communicates with the backend using Axios.

Example configuration:

js
const axiosInstance = axios.create({
  baseURL: "https://taskmanagement-backend-ona0.onrender.com",
});


JWT tokens are sent via the `Authorization` header for protected routes.



## 📁 Project Structure (Backend)


backend/
│── controllers/
│── routes/
│── models/
│── middleware/
│── config/
│── postman/
│── app.js
│── server.js
│── README.md



##  Scalability & Future Improvements

* The project follows a **modular architecture**, making it easy to scale.
* Can be converted into **microservices**.
* **Redis caching** can be added for performance optimization.
* **Docker** can be used for containerization.
* Load balancing can be implemented for high traffic scenarios.

---

##  Assignment Compliance Checklist

✔ RESTful API design
✔ JWT authentication
✔ Password hashing (bcrypt)
✔ Role-based access (Admin / User)
✔ CRUD operations
✔ API documentation (Postman)
✔ Protected routes
✔ Basic frontend UI
✔ Deployment-ready architecture

---

##  Author

**Aravind Jinna**
BCA Student | MERN Stack Developer

---

###  Final Note

This project was built strictly according to the assignment requirements, focusing on **backend quality, security, scalability, and clean API design**, with a minimal frontend to demonstrate functionality.


