const path = require("path");
module.exports = {
  // ... your existing configuration ...

  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    compress: true,
    port: 9125,
  },
};
