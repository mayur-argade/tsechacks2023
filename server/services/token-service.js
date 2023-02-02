const jwt = require("jsonwebtoken");
const accessTokenSecret = "thisisaccesstokensecret";


class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, accessTokenSecret, {
      expiresIn: "1h",
    });
    return { accessToken };
  }

  
}

module.exports = new TokenService();
