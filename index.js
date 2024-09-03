import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.get("/", (req, res) => {
  res.send("Prueba del Get");
});

app.use(cors());
app.use(bodyParser());

try {
  dbConnection.authenticate();
  console.log("Connected to DB");
} catch (error) {
  console.log(error);
}

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
