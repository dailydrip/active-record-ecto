const fs = require("fs");

fs.readdir("./static/queries", function(err, files) {
  fs.writeFile("./static/total.txt", files.length, function(err) {
    if (err) return console.log(err);
    console.log("Added number of queries: " + files.length);
  });
});
