const express = require("express");
const router = express.Router();
const passport = require("passport");

//auth with google
router.get(
  "/usergoogle",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

//callback route for google after athourization

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  console.log("redirected to home");
  res.redirect("/userprofile");
});

//Logout
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    return res.redirect("/");
  });
});

module.exports = router;
