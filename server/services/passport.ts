import passport from "passport";
import mongoose from "mongoose";

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = mongoose.model("users");

passport.serializeUser((user, done): void => {
  done(null, user.id);
});

passport.deserializeUser((id, done): void => {
  User.findById(id, (err, user): void => {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done): Promise<void> => {
      const existingUser = await User.findOne({ userID: profile.id });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const user = await new User({
          userID: profile.id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
        }).save();
        done(null, user);
      }
    },
  ),
);
