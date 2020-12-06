const exress = require("express");
const app = exress();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(
    JSON.stringify({
      name: "PawaOx4th",
    })
  );
});

app.listen(PORT, () => {
  console.log("Hi user browser");
});
