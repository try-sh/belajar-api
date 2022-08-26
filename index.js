const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const songs = [];

app.get("/api/songs", (req, res) => {
  console.log(songs)
  if (songs == []) {
    res.status(200).json({message: "Data kosong"});
  } else {
    res.status(200).json({data: songs});
  }
});

app.post("/api/songs/create", (req, res) => {
  const { id, album, band, song, duration, lyric, writer } = req.body;
  songs.push({ id, album, band, song, duration, lyric, writer });
  res
    .status(201)
    .json({ data: { id, album, band, song, duration, lyric, writer } });
});

app.get("/api/songs/:id", (req, res) => {
  const { id } = req.params;
  const data = songs.find((song) => song.id == id);
  if (data) {
    res.status(200).json({ data: data });
  } else {
    res.status(404).json({ message: "Data tidak ditemukan" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log("Server is running...");
});
