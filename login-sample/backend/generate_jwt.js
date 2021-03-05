const jsonwebtoken = require('jsonwebtoken');

const generate_jwt = (id) => {
  // ここはコード内に書かないほうが良い
  // 外部ファイルに書き込んでそちらを読むようにする
  const jwtSecret = 'secret';

  const payload = {
    id: id
  }

  const token = jsonwebtoken.sign(payload, jwtSecret);

  return token;
}

exports.generate_jwt = generate_jwt;