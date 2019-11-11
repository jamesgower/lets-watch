const passport = require("passport");

module.exports = (app): void => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    }),
  );

  app.get("/auth/facebook", passport.authenticate("facebook", { scope: "email" }));

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", (req, res): void => {
      res.redirect("/");
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
