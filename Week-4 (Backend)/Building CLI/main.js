const fs = require("fs");
const path = require("path");
const { program } = require("commander");

program
  .option("--search")
  .argument("<string>");

program.parse();

function readf(relativePath) {
  const fullPath = path.join(__dirname, relativePath);

  fs.readFile(fullPath, "utf-8", (err, data) => {
    if (err) {
      console.error("❌ Error reading file:", err.message);
      return;
    }

    const words = data.split(/\s+/);
    console.log(`Total number of words: ${words.length}`);
  });
}

// 🚀 Pass command-line argument
readf(program.args[0]);
