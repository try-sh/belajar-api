const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const biodata = [
  {
    message: "Hello world",
    name: "try",
    alamat: "bogor",
    umur: 30,
  },
  {
    message: "Hello world",
    name: "try",
    alamat: "bogor",
    umur: 30,
  },
];
app.get("/hello", (req, res) => {
  res.json(biodata);
});
app.listen(5000, () => {
  console.log("Server is running...");
});
