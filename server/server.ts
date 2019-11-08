import express, { Response, Request } from "express";
import mongoose from "mongoose";
import passport from "passport";
import cors from "cors";
import cookieSession from "cookie-session";
import bodyParser from "body-parser";
import "./models/User";

require("dotenv").config();
require("./services/passport");

const path = require("path");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_DB_URI);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  }),
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

if (process.env.NODE_ENV === "production") {
  const publicPath = path.join(__dirname, "../dist");

  app.use(express.static(publicPath));

  app.get("*", (req: Request, res: Response): void => {
    res.sendFile(path.join(publicPath, "index.html"));
  });
}

app.listen(port, (): void => {
  console.log("Server is up at port", port);
});
