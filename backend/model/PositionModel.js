const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");

const PositionModel = model("Position", PositionsSchema);  

const PositionsModel = PositionModel;

global.PositionsModel = PositionModel;

module.exports = { PositionModel, PositionsModel };  