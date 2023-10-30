const shortid = require("shortid");
const shorturldata = require("../model/url");

async function handleShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.json({ error: " URL required" });
  const shortIDobt = shortid();
  await shorturldata.create({
    Shortid: shortIDobt,
    redirectUrl: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortIDobt });
}

module.exports = {
  handleShortUrl,
};
