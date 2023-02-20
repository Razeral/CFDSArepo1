const express = require("express");

const app = express();

let quotes = [
  "Logic will get you from A to B. Imagination will take you everywhere.",
  "There are 10 kinds of people. Those who know binary and those who don't.",
  "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
  "It's not that I'm so smart, it's just that I stay with problems longer.",
  "It is pitch dark. You are likely to be eaten by a grue.",
];

app.set("view engine", "ejs");
app.get("/", function (req, res) {
  let quoteCounter = Math.floor(Math.random() * (quotes.length - 1)) + 1;
  res.render("pages/index", { quote: quotes[quoteCounter] });
});
app.use(express.static("public"));
app.use("/images", express.static("images"));

// Server setup
app.listen(process.env.PORT || 8080, () => {
  console.log(`Running server on PORT ${process.env.PORT || 8080}...`);
});
