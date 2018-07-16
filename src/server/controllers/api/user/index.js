import { Router } from "express";
import User from "../../../models/user";
import Rating from "../../../models/rating";
import { parseUserGames } from "./utils";

const user = Router();

user.get("/games", async (req, res) => {
  const user = await User.findById(req.user.id).populate("games.game");
  const games = parseUserGames(user.games.toObject());

  res.json(games);
});

user.put("/games/:id", async (req, res) => {
  const user = await User.findById(req.user.id);

  // TODO
  await user
    .set("games", {
      game: req.params.id,
      platforms: req.body.platforms,
      status: req.body.status
    })
    .save();

  res.status(204).end();
});

user.put("/games/:id/rating", async (req, res) => {
  await Rating.update(
    {
      user: req.user.id,
      game: req.params.id
    },
    { value: req.body.rating },
    { upsert: true }
  );

  res.status(204).end();
});

export default user;