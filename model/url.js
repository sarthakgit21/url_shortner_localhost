const mongoose = require("mongoose");

const urlschema = mongoose.Schema(
  {
    Shortid: {
      type: String,
      require: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      require: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

const shorturldata=mongoose.model('shorturldata',urlschema);

module.exports=shorturldata;