const asyncHandler = require("express-async-handler");

const Flight = require("../models/book.model");

// @ desc   Get flights
// @route   Get  /api/flights
// @access  private
const getFlights = asyncHandler(async (req, res) => {
  const flight = await Flight.find();
  res.status(200).json(flight);
});

// @ desc   create flight
// @route   Post  /api/flight
// @access  private
const setFlight = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const flight = await Flight.create({
    text: req.body.text,
  });
  res.status(200).json(flight);
});

// @ desc   update flight
// @route   put  /api/flight/:id
// @access  private
const updateFlight = asyncHandler(async (req, res) => {
  const flight = await Flight.findById(req.params.id);

  if (!flight) {
    res.status(400);
    throw new Error("Flight not Found");
  }

  const updatedFlights = await Flight.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedFlights);
});

// @ desc   Delete flight
// @route   Delete  /api/flights/:id
// @access  private
const deleteFlight = asyncHandler(async (req, res) => {
  const flight = await Flight.findById(req.params.id);

  if (!flight) {
    res.status(400);
    throw new Error("Flight not Found");
  }

  await flight.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getFlights,
  setFlight,
  updateFlight,
  deleteFlight,
};
