## 各種APIキーの設定
config/key.jsを作成し、以下のテンプレートにしたがって各種キーを入力する
```
const TWITTER_TOKENS = {
  TWITTER_CONSMER_KEY: "",
  TWITTER_CONSMER_SECRET: "",
  TWITTER_ACCESS_TOKEN: "",
  TWITTER_TOKEN_SECRET: ""
};

const MONGODB = {
  MONGODB_URI: `mongodb://<B_USER>:<DB_PASSWORD>@ds<SOME_DOMAIN>.mlab.com:<PORT>/<PROJECT_NAME>`
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
```
