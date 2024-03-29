# ZeroBaseBudget

*This project can be ran locally with this following instructions below*

For any question, I will be glad to help e.liv2know@gmail.com

Zero Base Budget is the concept of allocating all of your monthly payment to some expense.  If you have monthly payments left over it has to go toward something.  Hence,   monthly payments - expenses = 0.



This app has a backend folder which holds the server side code and the frontend that hold the client code.  

Locally these two folder communicate with each other through http request and html link for Passport/Oauth in src/views/Login.vue

**Getting Started**

Backend


1. Navigate to the backend directory (ex: cd backend)

2. Use nodemon or node.js app.js 

Frontend

1. Navigate to frontend directory

2. For this Vue.js project use npm run serve

3. Change the link on line 12 in `login.vue` file in `/src/views/login.vue` to to your local server uri

Both server should run simutaneously



***This app use Google Oauth***
1. Create project in the Google Api Console

 *Redirect Uri*: frontend local server url *ex: http://localhost:8080* 

 *Authorized redirect URIs*: backend local server url *ex: http://localhost:5000/auth/google/redirect*
  
2. Copy the ```api secret``` and ```api clientID``` into the .env-test ```backend/.env-test``` file.  


***This app use expressionSession***

Create an string  ```sessions.secret``` in .env-test which will be stored as a password in file ```backend/app.js```

***This app use MongoDb***

1. create a mongo account in **Atlas**
2. build a **new cluster**
3. Connect to the application
4. Update the DB_CONNTECTION in .env-test file
