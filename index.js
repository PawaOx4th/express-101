const exress = require("express");
const app = exress();

const PORT = 8080;

app.get("/", (res, req) => {
  res.send(
    JSON.stringify({
      name: "PawaOx4th",
    })
  );
});

app.listen(PORT, () => {
  console.log("Hi user browser");
});
