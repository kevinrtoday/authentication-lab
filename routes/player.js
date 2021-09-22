const express = require("express");
const {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
} = require("../controllers/playerController");
const router = express.Router();

//get all players
router.get("/", getAllPlayers);

//get single player
router.get("/player/id:", getPlayerById);

//post create player
router.get("/player", createPlayer);

//put update player
router.get("/player/id:", updatePlayer);

//delete player
router.get("/player/id:", deletePlayer);

module.exports = router;
