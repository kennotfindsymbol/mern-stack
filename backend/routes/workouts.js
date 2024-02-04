const express = require('express')
const {
  getWorkouts,
  getWorkout,
  createWorkout,
} = require('../controllers/workoutController')

const router = express.Router()

router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/:id', createWorkout)

router.delete('/:id', (req, res) => {
  res.json({mssg: ' DELETE single workout'})
})

router.patch('/:id', (req, res) => {
  res.json({mssg: 'PATCH single workout'})
})


module.exports = router