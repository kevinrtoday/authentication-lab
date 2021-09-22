const { Schema, model } = require('mongoose');

const SoccerPlayerSchema = Schema(
  {
    name: String,
    team: String,
    age: Number
  }
)

module.exports = model('SoccerPlayer', SoccerPlayerSchema)