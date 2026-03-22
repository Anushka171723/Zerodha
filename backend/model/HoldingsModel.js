const {model}=require("mongoose");
const {HoldingSchema}=require('../schemas/HoldingSchema');

const HoldingModel= model("holdings",HoldingSchema);
const HoldingsModel = HoldingModel;

global.HoldingsModel = HoldingModel;

module.exports={HoldingModel, HoldingsModel};