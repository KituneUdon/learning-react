const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('express-jwt');

const generate_jwt = require('./generate_jwt');

const app = express();

// JWT生成で用いる
// コード内に書かないほうが良い
// 外部ファイルに書き込んでそちらを読むようにする
const jwtSecret = 'secret';

// CORS対応
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));

// POSTのbodyの値を読み込むための設定
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  let param = {
    id: req.body.id,
    password: req.body.password
  }

  console.log(`id:${param.id}`);
  console.log(`password:${param.password}`);
  
  if (param.id === "test" && param.password === "test") {
    const token = generate_jwt.generate_jwt(param.id, jwtSecret)
    res.cookie('token', token, { httpOnly: true });
    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
});

app.use(cookieParser());
app.use(jwt({
  secret: jwtSecret,
  algorithms: ['HS256'],
  getToken: req => req.cookies.token 
}));

app.get('/mypage', (req, res) => {
  res.send(200, 'ログイン済みユーザのためマイページが表示されています');
});

app.listen(8000);
console.log('サーバ起動');