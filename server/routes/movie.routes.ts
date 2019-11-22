import mongoose from "mongoose";

const User = mongoose.model("users");

module.exports = (app): void => {
  app.put("/api/add_to_user", async (req, res) => {
    const { _id } = req.user;
    const { showID, type } = req.body;
    const user: any = await User.findById(_id);
    if (!user) {
      // No user with req id
      console.log("No user");
      return res.status(401).send({
        ...req.user,
        error: "wrong_user",
      });
    }
    if (user[type].indexOf(showID) === -1) {
      user[type].push(showID);
      user.save();
      // Successfully added
      return res.status(201).send(user);
    }
    // Already in user
    return res.status(409).send({
      user,
      error: "duplicate",
    });
  });

  app.patch("/api/remove_from_user", async (req, res) => {
    const { _id } = req.user;
    const { showID, type } = req.body;
    const user: any = await User.findById(_id);
    if (!user) {
      // No user with req id
      console.log("No user");
      return res.status(401).send({
        ...req.user,
        error: "wrong_user",
      });
    }
    const index = user[type].indexOf(showID);
    if (index > -1) {
      user[type].splice(index, 1);
      user.save();
      return res.send(user);
    }
    // Not in database
    return res.send({
      user,
      error: "duplicate",
    });
  });
};
