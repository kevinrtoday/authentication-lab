const { Schema, model } = require('mongoose');

const SoccerTeamSchema = Schema(
  {
    name: String,
    country: String,
    players: [Schema.Types.ObjectId]
  }
)

module.exports = model('SoccerTeam', SoccerTeamSchema);