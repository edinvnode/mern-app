const express = require("express");
const {
    getWorkouts,
    getWorkout,
    creatWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/WorkoutController')
const requireAuth = require ("../middleware/requireAuth")


const router = express.Router();

router.use(requireAuth)

//GET all workouts
router.get("/", getWorkouts)

//GET a single workout
router.get("/:id", getWorkout)

//POST a workout
router.post("/", creatWorkout)

//DELETE a workout
router.delete("/:id", deleteWorkout)


//UPDATE a workout
router.patch("/:id",updateWorkout)


module.exports = router;