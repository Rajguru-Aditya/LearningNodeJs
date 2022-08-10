const fs = require("fs");

const readStream = fs.createReadStream("./docs/bigFile.txt", {
  encoding: "utf-8",
});

const writeStream = fs.createWriteStream("./docs/textFile3.txt");

//Reading the file and writing it to a new file

// readStream.on("data", (chunk) => {
//   console.log("----------New Chunk---------");
//   console.log(chunk);
//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
// });

//Doing the same but way easier

readStream.pipe(writeStream);
