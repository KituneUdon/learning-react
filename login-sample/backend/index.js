const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const generate_jwt = require('./generate_jwt');

const app = express();

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
    const token = generate_jwt.generate_jwt(param.id)
    res.cookie('token', token, { httpOnly: true });
    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
});

app.listen(8000);
console.log('サーバ起動');