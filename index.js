const express = require("express");
const shorturldata = require("./model/url");
const app = express();
const connecttoMongodb = require("./connect");
const urlroute = require("./routers/url");
const PORT = 8000;
app.use(express.json());
app.use("/url", urlroute);
app.use("/:shortid", async (req, res) => {
  const shortid = req.params.shortid;
  const entry = await shorturldata.findOneAndUpdate(
    { shortid },
    {
      $push: { visitHistory: { timestamp: Date.now() } },
    }
  );
  res.redirect(entry.redirectUrl);
});

connecttoMongodb("mongodb://0.0.0.0:27017/short-url").then(() => {
  console.log(`Mongo db connected`);
});
app.listen(PORT, () => {
  console.log(`Hi from server at port:${PORT}`);
});
