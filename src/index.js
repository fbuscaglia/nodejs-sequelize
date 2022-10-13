import app from "./app.js";
import { sequelize } from "./database/database.js";
import { config } from "dotenv";
config();

// Settings
app.set("port", process.env.PORT || 4000);

async function main() {
  await sequelize.sync({ force: false });
  app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
  });
}

main();
