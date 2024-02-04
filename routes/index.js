const express = require("express");
const router = express.Router();

const messages = [
  { text: "Hello there", user: "Zizo", added: new Date() },
  { text: "Hello again", user: "Hosary", added: new Date() },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini-Message App", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  const author = req.body.author;
  const msg = req.body.msg;
  messages.push({ text: msg, user: author, added: new Date() });
  res.redirect("/");
});

module.exports = router;
