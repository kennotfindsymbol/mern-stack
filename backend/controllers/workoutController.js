const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// view all workouts
const getWorkouts = async (req, res) => {
  // sort by descending date (latest first)
  const workouts = await Workout.find({}).sort({createdAt: -1})
  res.status(200).json(workouts)
}

// view a workout
const getWorkout = async (req, res) => {
  const { id } = req.params
  // if id is not in mongoose's correct format
  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "does not exist"})
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
const deleteWorkout = async (req, res) => {
  const { id } = req.params
  // if id is not in mongoose's correct format
  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "does not exist"})
  }
  const workout = await Workout.findOneAndDelete({_id: id})
  // if id is in mongoose's correct format but workout is null
  if(!workout){
    return res.status(400).json({mssg: "does not exist"})
  }
  res.status(200).json(workout)
}
// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params
  // if id is not in mongoose's correct format
  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "does not exist"})
  }
  const workout = await Workout.findOneAndUpdate({_id: id}, {
    ...req.body
  })
  // if id is in mongoose's correct format but workout is null
  if(!workout){
    return res.status(400).json({mssg: "does not exist"})
  }
  res.status(200).json(workout)
}

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
}