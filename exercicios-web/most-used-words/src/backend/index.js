const { ipcMain } = require("electron");

ipcMain.on("process-subtitles", (event, paths) => {
  console.log(paths);

  event.reply("process-subtitles", [
    { name: "i", amount: 1234 },
    { name: "he", amount: 853 },
    { name: "you", amount: 900 },
    { name: "it", amount: 1238 },
    { name: "case", amount: 853 },
    { name: "she", amount: 1900 },
  ]);
});
