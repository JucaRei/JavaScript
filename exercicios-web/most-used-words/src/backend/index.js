const { ipcMain } = require("electron");

const pathsToRows = require("./pathsToRows");
const prepareData = require("./prepareData");

ipcMain.on("process-subtitles", (event, paths) => {
  // console.log(paths);

  pathsToRows(paths)
    .then((rows) => prepareData(rows))
    .then((words) => console.log(words))
    .then(() => {
      event.reply("process-subtitles", [
        { name: "i", amount: 1234 },
        { name: "he", amount: 853 },
        { name: "you", amount: 900 },
        { name: "it", amount: 1238 },
        { name: "case", amount: 853 },
        { name: "she", amount: 1900 },
      ]);
    });
});
