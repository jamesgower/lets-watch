const passport = require("passport");

module.exports = (app): void => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    }),
  );

  app.get("/api/logout", (req, res): void => {
    req.logout();
    res.redirect("/");
  });

  app.get("/auth/google/callback", passport.authenticate("google"), (req, res): void => {
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res): void => {
    res.send(req.user);
  });
};
