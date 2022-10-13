import app from "./app.js";
import { sequelize } from "./database/database.js";
import { config } from "dotenv";
import express from "express";
import path from 'path';
import {fileURLToPath} from 'url';
config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Settings
app.set("port", process.env.PORT || 4000);

async function main() {
  await sequelize.sync({ force: false });
  app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
  });
}


app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

main();
