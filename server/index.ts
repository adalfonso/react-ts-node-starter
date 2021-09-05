import "core-js";
import "regenerator-runtime";
import * as dotenv from "dotenv";
import * as express from "express";
import { connect } from "./db/Client";
import { enableHmr } from "./hmr";

dotenv.config();

// Check for required env vars
["NODE_PORT", "SOURCE_DIR"].forEach((key) => {
  if (process.env[key] === undefined) {
    throw new Error(`Missing env value for ${key}`);
  }
});

const app = express();

// Enable hot module replacement during dev
if (process.env.NODE_ENV === "development") {
  enableHmr(app);
}

app.use(express.static(process.env.SOURCE_DIR));

app.listen(process.env.NODE_PORT, () => {
  console.log(`Server started: http://localhost:${process.env.NODE_PORT}`);
  console.log(`Serving content from /${process.env.SOURCE_DIR}/`);
});

connect(process.env.MONGO_HOST, process.env.MONGO_PORT);
