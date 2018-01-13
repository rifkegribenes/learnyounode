const fs = require('fs');
const path = require('path');

module.exports = (dir, ext, callback) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return callback(err);
    }
    const data = files.filter(file => path.extname(file) === `.${ext}`);
    callback(null, data);
    });
}