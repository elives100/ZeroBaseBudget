# ZeroBaseBudget

For any question, I will be glad to help e.liv2know@gmail.com

**Overview**

Zero Base Budget is the concept of allocating all of your monthly payment to some expense. If you have monthly payments left over it has to go toward something. Hence, monthly payments - expenses = 0.

This app has a backend folder which holds the server side code and the frontend that hold the client code.

Locally these two folder communicate with each other through http request and html link for Passport/Oauth in src/views/Login.vue

**Getting Started**

Backend

    Navigate to the backend directory (ex: cd backend)

    Use nodemon or node.js app.js

Frontend

    Navigate to frontend directory

    For this Vue.js project use npm run serve

Both server should run simutaneously

This app use Google Oauth

    Create project in the Google Api Console

Redirect Uri: frontend local server url ex: http://localhost:8080

Authorized redirect URIs: backend local server url ex: http://localhost:5000/auth/google/redirect

    Copy the api secret and api clientID into the .env-test backend/.env-test file.

This app use expressionSession

Create an string sessions.secret in .env-test which will be stored as a password in file backend/app.js

This app use MongoDb

    create a mongo account in Atlas
    build a new cluster
    Connect to the application
    Update the DB_CONNTECTION in .env-test file
