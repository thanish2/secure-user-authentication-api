🚀 Secure User Authentication api
============================
**Node.js Authentication and Authorization API** 🚀
*A robust and scalable API for user authentication and authorization*

📖 Description
================
This project is a Node.js-based API that provides a robust and scalable solution for user authentication and authorization. It utilizes Express.js as the web framework, MongoDB as the database, and Mongoose as the ODM (Object Data Modeling) library. The API features a comprehensive set of endpoints for user registration, login, password reset, and email verification, as well as role-based access control.

The API is designed with security in mind, using JSON Web Tokens (JWT) for authentication and authorization. It also includes a robust error handling system, using a custom `ApiError` class to handle and respond to errors in a standardized way. The API is highly customizable, with a modular architecture that allows developers to easily add or remove features as needed.

The project includes a range of features, including user registration, login, password reset, and email verification, as well as role-based access control. The API is designed to be highly scalable, with a focus on performance and reliability. It is suitable for use in a variety of applications, from small-scale web applications to large-scale enterprise systems.

✨ Features
================
The following are some of the key features of the API:

1. **User Registration**: Users can register for an account using a valid email address and password.
2. **Login**: Users can log in to their account using their email address and password.
3. **Password Reset**: Users can reset their password if they forget it.
4. **Email Verification**: Users can verify their email address to ensure it is valid and active.
5. **Role-Based Access Control**: The API includes a role-based access control system, with three roles: admin, project admin, and member.
6. **JSON Web Tokens (JWT)**: The API uses JWT for authentication and authorization.
7. **Error Handling**: The API includes a robust error handling system, using a custom `ApiError` class to handle and respond to errors in a standardized way.
8. **Modular Architecture**: The API has a modular architecture, with each feature and component separated into its own module.

🧰 Tech Stack Table
====================
| Category | Technology |
| --- | --- |
| Frontend | None (API only) |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JSON Web Tokens (JWT) |
| Error Handling | Custom `ApiError` class |

📁 Project Structure
======================
The project is structured into the following folders and files:

* `app.js`: The main application file, which sets up the Express.js app and configures the API.
* `controllers`: A folder containing the API controllers, which handle incoming requests and send responses.
* `db`: A folder containing the database configuration and models.
* `middleware`: A folder containing the API middleware, which handles tasks such as authentication and error handling.
* `models`: A folder containing the database models, which define the structure of the data in the database.
* `routes`: A folder containing the API routes, which define the endpoints and methods for the API.
* `utils`: A folder containing utility functions and classes, such as the `ApiError` class and the `asyncHandler` function.

⚙️ How to Run
================
To run the API, follow these steps:

1. Clone the repository to your local machine using `git clone`.
2. Install the dependencies using `npm install`.
3. Create a new file called `.env` in the root of the project, and add the following environment variables:
	* `MONGO_URI`: The URI of the MongoDB database.
	* `PORT`: The port number to use for the API (default is 3000).
4. Start the API using `npm start`.
5. Use a tool such as Postman or cURL to test the API endpoints.

🧪 Testing Instructions
=======================
To test the API, follow these steps:

1. Start the API using `npm start`.
2. Use a tool such as Postman or cURL to send requests to the API endpoints.
3. Test each endpoint and method to ensure it is working as expected.
4. Use the `ApiError` class to handle and respond to errors in a standardized way.

📸 Screenshots
================
Unfortunately, as this is an API, there are no screenshots to provide. However, you can use a tool such as Postman or cURL to test the API endpoints and view the responses.

📦 API Reference
==================
The API includes the following endpoints and methods:

* `POST /register`: Register a new user.
* `POST /login`: Log in to an existing user account.
* `POST /password/reset`: Reset a user's password.
* `GET /email/verify`: Verify a user's email address.
* `GET /healthcheck`: Check the health of the API.


👤 Author
================
The API was created by Thanish P M.
