module.exports = (rows) => {
  return new Promise((resolver, reject) => {
    try {
      const words = rows
        .filter(filterValidRow)
        .map(removePonctuation)
        .map(removeTags)
        .reduce(mergeRows)
        .split(" ")
        .map((word) => word.toLowerCase());

      resolver(words);
    } catch (e) {
      reject(e);
    }
  });
};

function filterValidRow(row) {
  const notNumber = !parseInt(row.trim()); //trim - tirar os espacos em branco
  const notEmpty = !!row.trim();
  const notInterval = !row.includes("-->");
  return notNumber && notEmpty && notInterval;
}

const removePonctuation = (row) => row.replace(/[,?!.-;:_=*+"]/g, "");
const removeTags = (row) => row.replace(/(<[^>]+)>/gi, "").trim();
const mergeRows = (fullText, row) => `${fullText} ${row}`;
