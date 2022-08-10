const fs = require("fs");

// Read file
fs.readFile("./docs/textFile1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// Write to existing file if specified file exists
fs.writeFile("./docs/textFile1.txt", "New text", () => {
  console.log("File written successfully👍");
});

// Create a new file if specified file doesn't exist
fs.writeFile("./docs/textFile2.txt", "New text in new file", () => {
  console.log("File written successfully👍");
});

// Directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("New folder created👍");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder deleted👍");
  });
}

// Delete file
if (fs.existsSync("./docs/textFile2.txt")) {
  fs.unlink("./docs/textFile2.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File deleted👍");
  });
}
