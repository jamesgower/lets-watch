import passport from "passport";
import mongoose from "mongoose";

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GitHubStrategy = require("passport-github").Strategy;

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
          image: profile.photos[0].value,
        }).save();
        done(null, user);
      }
    },
  ),
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:3000/auth/facebook/callback",
      profileFields: ["email", "id", "first_name", "gender", "last_name", "picture"],
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
          image: profile.photos[0].value,
        }).save();
        done(null, user);
      }
    },
  ),
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/github/callback",
    },
    async (accessToken, refreshToken, profile, done): Promise<void> => {
      try {
        const existingUser = await User.findOne({ userID: profile.id });
        if (existingUser) {
          done(null, existingUser);
        } else {
          const user = await new User({
            userID: profile.id,
            firstName: profile.displayName,
            lastName: undefined,
            email: profile.emails?.[0].value,
            image: profile.photos[0].value || null,
          }).save();
          done(null, user);
        }
      } catch (e) {
        console.log(e);
      }
    },
  ),
);
