const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// view all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({createdAt: -1})
  res.status(200).json(workouts)
}

// view a workout
const getWorkout = async (req, res) => {
  const { id } = req.params
  // if id is not in mongoose's correct format
  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error: "does not exist"})
  }
  const workout = await Workout.findById(id)
  // if id is in mongoose's correct format but workout is null
  if(!workout){
    return res.status(400).json({mssg: "does not exist"})
  }
  res.status(200).json(workout)
}

// create a workout
const createWorkout = async (req, res) => {
  const {title, load, reps} = req.body
  try {
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a workout

// update a workout


module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
}