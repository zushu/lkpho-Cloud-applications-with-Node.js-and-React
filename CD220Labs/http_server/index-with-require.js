const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
  res.writeHead(200);
  var dateVal = today.getDate();
  var hour = dateVal.getHours();

  greeting = "Gecələr keçir...";
  if (hour >= 6 && hour <= 12)
  {
    greeting = "Guten Morgen!";
  }
  else if (hour > 12 && hour <= 18)
  {
    greeting = "Guten Tag! (not sure about the gender)";
  }
  else if (hour > 18 && hour <= 21)
  {
    greeting = "Guten Abend!";
  }
  else if (hour > 21 && hour <= 24)
  {
    greeting = "Gute Nacht!";
  }

  //console.log("hour:" + hour);
  res.end("Hello, " + greeting);
  res.end(`Hello, World! The date today is ${today.getDate()}`);
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);