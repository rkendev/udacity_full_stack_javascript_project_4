import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { sequelize } from "./sequelize";
import { config } from "./config/config";

import { IndexRouter } from "./controllers/v0/index.router";

import bodyParser from "body-parser";
import { V0_FEED_MODELS, V0_USER_MODELS } from "./controllers/v0/model.index";

(async () => {

  console.log("test1");
  dotenv.config();
  console.log("test2");


  await sequelize.addModels(V0_FEED_MODELS);
  console.log("test3");
  await sequelize.addModels(V0_USER_MODELS);
  console.log("test4");
  await sequelize.sync();
  console.log("test5");

  console.log("Database Connected");

  const app = express();
  console.log("test6");
  //const port = 8080;
  const port = config.server_port || 9001;
  console.log("test7");

  app.use(bodyParser.json());
  console.log("test8");

  app.use(cors());
  console.log("test9");

  app.use("/api/v0/", IndexRouter);
  console.log("test10");

  // Root URI call
  app.get("/", async (req, res) => {
    res.send("/api/v0/");
  });

  // Start the Server
  app.listen(process.env.PORT, () => {
    console.log(`server running ${process.env.URL}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
