//auth.js
const { OAuth2Client } = require("google-auth-library");

const User = require("./models/user");

// Create a new OAuth2Client to verify google sign-in
const GOOGLE_CLIENT_ID =
  "428394025772-7dku9vrms7l56cpcf28l9a2ara40098r.apps.googleusercontent.com";
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

// Verify the token and return the user's information
function verifyToken(tokenId) {
  return new Promise((resolve, reject) => {
    client
      .verifyIdToken({
        idToken: tokenId,
        audience: GOOGLE_CLIENT_ID,
      })
      .then((ticket) => {
        //console.log("ticket:", ticket);
        console.log("payload:", ticket.getPayload());
        const payload = ticket.getPayload();
        resolve(payload);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function login(req, res) {
  const tokenId = req.body.tokenId;

  verifyToken(tokenId)
    .then((payload) => {
      User.findOne({ googleid: payload["sub"] }).then((user) => {
        if (user) {
          res.json(user);
        } else {
          const newUser = new User({
            name: payload["name"],
            googleid: payload["sub"],
            email: payload["email"],
            locale: payload["locale"],
            picture: payload["picture"],
          });
          newUser.save().then((user) => {
            res.json(user);
          });
        }
      });
    })
    .catch((error) => {
      res.status(401).json(error);
    });
}

module.exports = {
  login,
};
