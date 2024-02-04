const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({mssg: 'workoutssss'})
})

router.get('/:id', (req, res) => {
  res.json({mssg: 'GET single workout'})
})

router.post('/:id', async (req, res) => {
  const {title, load, reps} = req.body
  try {
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

router.delete('/:id', (req, res) => {
  res.json({mssg: ' DELETE single workout'})
})

router.patch('/:id', (req, res) => {
  res.json({mssg: 'PATCH single workout'})
})


module.exports = router