const mongoose = require("mongoose");

const { Schema } = mongoose;

const flightSchema = new Schema({
  flightNumber: String,
  originCountry:String,
  protocolNumber:String,
  velocity:String,
  geoAltitude:String, 
  createdAt:{
    type:Date,
    default: Date.now(),
}

})

module.exports = mongoose.model("Flight",flightSchema);