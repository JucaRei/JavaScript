//lista dos caminhos e todas as linhas que estão dentro das legendas
const fs = require("fs");

module.exports = (paths) => {
  return new Promise((resolver, reject) => {
    try {
      const rows = paths
        .map((path) => fs.readFileSync(path).toString("utf-8"))
        .reduce((fullText, fileText) => `${fullText}\n${fileText}`) // concatenar
        .split("\n"); // array de linhas
      resolver(rows);
    } catch (e) {
      reject(e);
    }
  });
};
