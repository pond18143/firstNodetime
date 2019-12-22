const express = require("express");
const app = express();
const router = require('./router')(app);


app.listen(7000,function () {
    console.log('Example app listening on port 7000!')
  })

  module.exports = app