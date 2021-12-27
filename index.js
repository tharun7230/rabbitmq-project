const fs = require('fs');
const xml2js = require('xml2js');
const util = require('util');

const parser = new xml2js.Parser();

fs.readFile("Send CT - 800 EES Event - Acpt.xml", (err, data) => {
 parser.parseString(data, (err, result) => {
  fs.writeFile(
    "sample.txt",
    console.log(util.inspect(result, false, null, true)),
    function (err) {
      if (err) throw err;
      console.log("File is created successfully.");
    }
  );
   
   
  });
});


// console.log(util.inspect(result, false, null, true));