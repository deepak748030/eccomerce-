const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id: "dscdcscdscdscdscc",
  client_secret: "knsakdxndkdek",
});

module.exports = paypal;
