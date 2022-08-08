const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require("../queries/songs.js");
const { checkArtist, checkBoolean, checkName } = require("../validations/checkSongs.js");

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    if (song) {
        res.json(song);
    } else {
        res.status(404).json({ error: "not found"})
    }
});

songs.post("/", checkArtist, checkBoolean, checkName, async (req, res) => {
    try {
        const song = await createSong(req.body)
        res.json(song)
        
    } catch (error) {
        return res.status(400).json({ error: error });
    }
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id){
    res.status(200).json(deletedSong)
  } else {
      res.status(404).json({ error: "Song not Found!" })
  }
});

songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(req.body, id);
  if (updatedSong.id) {
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json({ error: "Your song did not UPDATE...."})
  }
})
module.exports = songs;
