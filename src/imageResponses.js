const fs = require('fs'); // pull in the file system module

const dankmemes = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getPic = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(dankmemes);
  response.end();
};

module.exports.getPic = getPic;
