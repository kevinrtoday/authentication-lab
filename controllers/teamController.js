const SoccerTeam = require("../models/SoccerTeam");

const getAllTeams = async (req, res) => {
  const meetings = await SoccerTeam.find();
  try {
    return res.status(200).json(meetings);
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

const getTeamById = async (req, res) => {
  const { id } = req.params;
  const meeting = await SoccerTeam.findById(id);
  try {
    return res.status(200).json(meeting);
  } catch (error) {
    return res.status(400).json({ message: "User not found" });
  }
};

const createTeam = async (req, res) => {
  const meeting = await SoccerTeam.create(req.body);
  try {
    return res.status(201).json(meeting);
  } catch (error) {
    return res.status(500).json({ message: "Coudn't create the meeting" });
  }
};

const updateTeam = async (req, res) => {
  const { id } = req.params;
  const meeting = await SoccerTeam.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(meeting);
  } catch (error) {
    return res.status(500).json({ message: "Cound't update meeting" });
  }
};

const deleteTeam = async (req, res) => {
  const { id } = req.params;
  await SoccerTeam.findByIdAndDelete(id);
  try {
    return res
      .status(203)
      .json({ message: "Successfully Deleted The meeting" });
  } catch (error) {
    return res.status(500).json({ message: "Couldn't delete the meeting" });
  }
};

module.exports = {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
};
