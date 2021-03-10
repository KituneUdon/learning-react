const passport = require("passport");
const TwitterStrategy = require("passport-twitter");
const keys = require("./keys");
const User = require("../models/user-model");

// userIDをシリアル化してCookieに保存
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// IDからユーザを特定する処理
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(e => {
      done(new Error("Failed to deserialize an user"));
    });
});

passport.use(
  new TwitterStrategy({
    consumerKey: keys.TWITTER_CONSMER_KEY,
    consumerSecret: keys.TWITTER_CONSMER_SECRET,
    callbackURL: "/auth/twitter/redirect"
  },
  async (token, tokenSecret, profile, done) => {
    // find current user in UserModel
    const currentUser = await User.findOne({
      twitterId: profile._json.id_str
    });

    // create new user if the database dosen't have this user
    if (!currentUsr) {
      const newUser = await new User({
        name: profile._json.name,
        screenName: profile._json.screen_name,
        twitterId: profile._json.id_str,
        profileImageUrl: profile._json.profile_image_url
      }).save();
      if (newUser) {
        done(null, newUser);
      }
    }
    done(null, currentUser)
  })
);