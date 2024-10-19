const express = require("express");
const app = express();
const userRouter = require("./route");
const port = 3001;
const creteDbConnection = require("./db");

const dbUrlString =
  "YOUR_MONGO_DB_URL";
creteDbConnection(dbUrlString);

// middleware that parse the json 
app.use(express.json());

app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
