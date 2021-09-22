const express = require("express");
const { updatePlayer } = require("../controllers/playerController");
const {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
} = require("../controllers/teamController");
const router = express.Router();

// get all teams
router.get("/", getAllTeams);

// get single team
router.get("/team/id:", getTeamById);

// put create team
router.get("/team", createTeam);

// post update team
router.get("/team/id:", updateTeam);

// delete team
router.get("/team/id:", deleteTeam);

module.exports = router;
