import cors from "cors";
import express from "express";

const app = express();
app.use(cors(), express.json());

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
