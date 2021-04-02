const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
require("dotenv").config();
const User = require("../models/userModel");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      //options for the google strategy
      callbackURL: "http://localhost:5000/auth/google/redirect",
      clientID: process.env.GOOGLE_IDDEV,
      clientSecret: process.env.GOOGLE_SECRETDEV,
    },
    (accessToken, refreshToken, profile, done) => {
      //passport callback function
      console.log("passport callback fired");
      //Check if user already exist in Db
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          //already have user
          done(null, currentUser);
          console.log(currentUser);
        } else {
          //create new user
          new User({
            username: profile.username,
            name: profile.displayName,
            googleId: profile.id,
          })
            .save()
            .then((newUser) => {
              console.log(`$was just created`);
              done(null, newUser);
            });
        }
      });
    }
  )
);
