const express = require('express');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');

const app = express();

// CORS対策
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}))

const jwtSecret = 'secret123';

app.get('/jwt', (req, res) => {
  // JWTを生成する（今回は固定値で作成している）
  res.json({
    token: jsonwebtoken.sign({ user: 'johndoe' }, jwtSecret)
  });
});

app.use(jwt({ secret: jwtSecret, algorithms: ['HS256']}));

const foods = [
  { id: 1, description: 'burritos' },
  { id: 2, description: 'quesadillas' },
  { id: 3, description: 'churos' }
];

app.get('/foods', (req, res) => {
  res.json(foods)
});

app.listen(3001);
console.log('App running on localhost:3001');