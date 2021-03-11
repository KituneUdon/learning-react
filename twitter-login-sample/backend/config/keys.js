const TWITTER_TOKENS = {
  TWITTER_CONSMER_KEY: "ykij43cw5EtL0acPAKwtLZd9e",
  TWITTER_CONSMER_SECRET: "s6HtssCywipfaYMSmfdonQyNj6R0Mxk1p2GT7SJhPYDFOe2HHI",
  TWITTER_ACCESS_TOKEN: "19yj9P2gVI24ZVLgt1b8qpswScC5VxRBt5Y2nKmoBVA5O",
  TWITTER_TOKEN_SECRET: "1326869524549783552-Nj4BIrjgyUjpZAdqV8X45App6uGeqh"
};

const DB_USER = "kituneudon";
const DB_PASSWORD = "TjA9TNU2K565";
const MONGODB = {
  // MONGODB_URI: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@twitterloginsample.nvqc4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  MONGODB_URI: "mongodb+srv://kituneudon:TjA9TNU2K565@twitterloginsample.nvqc4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
}

const SESSION = {
  COOKIE_KEY: "thisappisawasome"
};

const KEYS = {
  ...TWITTER_TOKENS,
  ...MONGODB,
  ...SESSION
};

module.exports = KEYS;