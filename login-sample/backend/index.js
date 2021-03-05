const express = require('express');
const bodyParser = require('body-parser')

const app = express();

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
    res.sendStatus(200);
  }
});

app.listen(8000);
console.log('サーバ起動');