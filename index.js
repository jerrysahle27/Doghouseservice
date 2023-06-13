const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
// app.use(function (req, res, next) {
//   req.setTimeout(20, function () {
//     return res.status(500).json({ message: "Server time out!" });
//   });
// });
app.use("/", routes);
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
