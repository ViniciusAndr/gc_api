const express = require("express");
const app = express();

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log("Server is listening on port 3000");
});
