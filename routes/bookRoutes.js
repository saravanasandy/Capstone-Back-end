const express = require("express");
const router = express.Router();
const {
  getFlights,
  setFlight,
  updateFlight,
  deleteFlight,
} = require("../controllers/bookControllers");

// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').put(updateGoals).delete(deleteGoal)

router.get("/", getFlights);

router.post("/",setFlight);

router.put("/:id",updateFlight);

router.delete("/:id",deleteFlight);

module.exports = router;
