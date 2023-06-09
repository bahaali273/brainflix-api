const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const videosRoutes = require("./routes/videos");

app.use(express.static("public")); // allows access to public folder
app.use(express.json()); // parses req.body
app.use(cors());

app.use("/videos", videosRoutes);

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});