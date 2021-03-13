const fs = require('fs');

const globalClickTracker = (clickData, cb) => {
  // console.log(clickData);
  clickData = JSON.stringify(clickData);
  fs.appendFile('./server/clickdata/clickData.txt', '\n' + clickData, err => {
    if (err) {
      cb(err);
    } else {
      cb(null);
    }
  });
};

module.exports = globalClickTracker;