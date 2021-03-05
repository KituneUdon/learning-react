const jsonwebtoken = require('jsonwebtoken');

const generate_jwt = (id, jwtSecret) => {
  const payload = {
    id: id
  }

  const token = jsonwebtoken.sign(payload, jwtSecret);

  return token;
}

exports.generate_jwt = generate_jwt;