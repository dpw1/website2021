#!/usr/bin/env node
const axios = require("axios");
const fs = require("fs");
const path = require("path");

(async function () {
  const currentDirectory = process.argv[2] || process.cwd();
  let files = [];

  const filenames = await fs.promises.readdir(currentDirectory);

  const generateFFMPEGCode = (filename) => {
    const cleanName = filename.replace(/(^.*)(\..{2,3})$/gi, "$1");
    return `ffmpeg -i ${cleanName}.mp4 -vf "select=eq(n\\,1)" -q:v 3 ${cleanName.replace(
      "video-",
      "thumbnail-",
    )}.jpg`;
  };

  const stats = await Promise.all(
    filenames.map((filename) =>
      fs.promises.lstat(path.join(currentDirectory, filename)),
    ),
  );

  for (let each of stats) {
    const index = stats.indexOf(each);
    const name = filenames[index];
    const isFile = each.isFile();
    const type = isFile ? "file" : "folder";

    let totalFiles = 0,
      totalFolders = 0;

    files.push({
      name,
      isFile,
      total: stats.length,
      totalFiles: type === "file" ? (totalFiles += 0) : (totalFiles += 1),
      totalFolders:
        type === "folder" ? (totalFolders += 0) : (totalFolders += 1),
    });
  }

  /* Print to console */
  for (let { name, isFile, totalFiles } of files) {
    const file = isFile ? "file" : "folder";

    console.log(`${generateFFMPEGCode(name)}`);
  }
})();
