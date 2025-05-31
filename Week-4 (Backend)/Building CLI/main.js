const fs = require("fs");
const path = require("path");
const { program } = require("commander");

// CLI Options
program
  .name("text-analyzer")
  .description("Analyze text files with different options")
  .version("1.0.0")
  .argument("<file>", "File path relative to script")
  .option("--search <word>", "Search for a word and count its occurrences")
  .option("--lines", "Count the number of lines in the file")
  .option("--chars", "Count the number of characters in the file")
  .helpOption("-h, --help", "Display help for commands");

program.parse();

const options = program.opts();
const filePath = program.args[0];

function readf(relativePath) {
  const fullPath = path.join(__dirname, relativePath);

  fs.readFile(fullPath, "utf-8", (err, data) => {
    if (err) {
      console.error(" Error reading file:", err.message);
      return;
    }

    console.log(` Analyzing: ${relativePath}`);

    // Word count
    const words = data.split(/\s+/);
    console.log(` Total words: ${words.length}`);

    // Line count
    if (options.lines) {
      const lines = data.split(/\r?\n/).length;
      console.log(` Total lines: ${lines}`);
    }

    // Character count
    if (options.chars) {
      const chars = data.length;
      console.log(` Total characters: ${chars}`);
    }

    // Search word count
    if (options.search) {
      const target = options.search.toLowerCase();
      const count = words.filter(w => w.toLowerCase() === target).length;
      console.log(` Occurrences of "${target}": ${count}`);
    }
  });
}

// Run
readf(filePath);
