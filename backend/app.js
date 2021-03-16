const serveStatic = require("serve-static");
const path = require("path");
const express = require("express");
const app = express();
const userRoutes = require("./routes/user");
const budgetRoutes = require("./routes/budget");
require("dotenv/config");
const port = process.env.PORT || 5000;
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const MongoStore = require("connect-mongo")(sessions);
const passport = require("passport");
const passportSetup = require("./config/passport.js");

//Log when making request
app.use(morgan("combined"));

//Parse body for post request
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var corsOption = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOption));

app.use(
  sessions({
    secret: process.env.SESSION_COOKIEKEY,
    saveUninitialized: false,
    resave: false,
    sameSite: "none",
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
    cookie: {
      // secure: true,
      maxAge: 86400000,
      SameSite: "none",
    },
  })
);

//Initialize passport
app.use(passport.initialize());
app.use(passport.session());

//Automatic route placer
app.use("/auth", userRoutes);
app.use("/api/budget", budgetRoutes);

//Mongo connection
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => console.log("connected to mongo atlas")
);

if (process.env.NODE_ENV === "production") {
  //Handle production
  app.use(express.static(path.join(__dirname, "/public")));
  console.log("production");
  // Redirect all requests to `index.html`
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });
}

//Start app
app.listen(port, () => {
  console.log(`Server is on port ${port}`);
});
