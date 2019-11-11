const passport = require("passport");

module.exports = (app): void => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    }),
  );

  app.get("/auth/google/callback", passport.authenticate("google"), (req, res): void => {
    res.redirect("/");
  });

  app.get("/auth/facebook", passport.authenticate("facebook", { scope: "email" }));

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook"),
    (req, res): void => {
      res.redirect("/");
    },
  );
  app.get("/auth/github", passport.authenticate("github", { scope: "user" }));

  app.get("/auth/github/callback", passport.authenticate("github"), (req, res): void => {
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res): void => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res): void => {
    req.logout();
    res.redirect("/");
  });
};
