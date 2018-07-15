import { compact, sample, random, round } from "lodash";

const getCover = (hash, size = "cover_big") =>
  `https://images.igdb.com/igdb/image/upload/t_${size}/${hash}.jpg`;

const mapPlatformName = id => {
  const platformNames = {
    "6": "PC",
    "14": "MAC",
    "3": "LIN",
    "48": "PS4",
    "9": "PS3",
    "49": "XONE",
    "12": "X360",
    "130": "NSW"
  };

  return platformNames[`${id}`];
};

export const parseSearchResults = response =>
  response
    .filter(({ platforms, cover }) => platforms && cover && cover.cloudinary_id)
    .map(({ name, cover, platforms }) => ({
      name,
      cover: getCover(cover.cloudinary_id),
      platforms: compact(platforms.map(mapPlatformName))
    }))
    .filter(({ platforms }) => platforms.length);

export const enrichUserCollection = searchResults =>
  searchResults.map(game => ({
    ...game,
    platforms: game.platforms.reduce(
      (platforms, name) => ({
        ...platforms,
        [name]: sample([true, false]) // TODO
      }),
      {}
    ),
    status: sample([null, "wishlist", "backlog", "playing", "completed"]), // TODO
    rating: sample([null, random(1, 10)]), // TODO
    score: round(random(1, 10, true), 1), // TODO
    votes: sample([0, random(1, 9999)]) // TODO
  }));
