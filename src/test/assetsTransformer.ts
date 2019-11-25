const path = require("path");

module.exports = {
  process(src, filename, config, options): string {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
