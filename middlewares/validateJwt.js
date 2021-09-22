const jwt = require('jsonwebtoken');

const generateJwt = (id) => {
  return new Promise((resolve, reject) => {
    const data = {uid: id};
    jwt.sign(data, 'aljsfdkurwieoqlksdajoiqw824338923', {
      expiresIn: '4h'
    }, (err, token) => {
      if (err) {
        reject("Coudn't generate token");
      } else {
        resolve(token);
      }
    })
  })
}

module.exports = {
  generateJwt
}