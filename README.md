# ZeroBaseBudget

**Overview**

Upgrade branch Vuex Store and new ui implementation

Zero Base Budget is the idea of allocating all of your monthly payment to some expense.  If you have monthly payments left over it has to go toward something.  Hence,   monthly payments - expenses = 0.



This app has a backend folder which holds the server side code and the frontend that hold the client code.  

Locally these two folder communicate with each other through http request and html link for Passport/Oauth in src/views/Login.vue

**Getting Started**

Backend


1. Navigate to the backend directory (ex: cd backend)

2. Use nodemon or node.js app.js 

Frontend

1. Navigate to frontend directory

2. For this Vue.js project use npm run serve

Both server should run simutaneously

***This app uses Google Oauth***

So create project inn the Google Api Console and copy the ```api secret``` and ```api clientID``` into the GoogleStraategy inside ```backend/config/passport.js``` file.  

***This app uses expressionSession***

Create an string  ```sessions.secret``` which will be stored as a password in file ```backend/app.js```
