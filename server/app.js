// CONSTANTS
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/TheStore";

// PACKAGE REQUIRES
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

require("dotenv").load({ silent: true });

// APP DECLARATION
const app = express();

app.use(express.static("src"));

// // DB CONNECT
// require('mongoose').connect(MONGO_URI, err => {
//   if (err) throw err;
//   console.log(`MongoDB connected to ${MONGO_URI}`);
// });

require("mongoose").connect("mongodb://localhost/TheStore", {
  useMongoClient: true
  /* other options */
});

if (process.env.NODE_ENV === "prod") {
  app.use(express.static(path.join(__dirname, "../dist")));
} else {
  // WEBPACK CONFIG
  const webpack = require("webpack");
  const webpackConfig = require("../webpack.config");
  // const webpackConfig = require('../webpack.dev');
  const compiler = webpack(webpackConfig);

  app.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    })
  );

  // app.use(require('webpack-hot-middleware')(compiler));
}

// GENERAL MIDDLEWARE
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// ROUTES
app.use("/api", require("./routes/api"));

app.get("*", (req, res) => {
  const indexPath = path.join(__dirname, "../src/index.html");
  res.sendFile(indexPath);
});

// SERVER LISTEN
app.listen(PORT, err => {
  if (err) throw err;

  console.log(`Server listening at http://localhost:${PORT}`);
});
