const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({mssg: 'workoutssss'})
})

router.get('/:id', (req, res) => {
  res.json({mssg: 'GET single workout'})
})

router.post('/:id', (req, res) => {
  res.json({mssg: 'POST single workout'})
})

router.delete('/:id', (req, res) => {
  res.json({mssg: ' DELETE single workout'})
})

router.patch('/:id', (req, res) => {
  res.json({mssg: 'PATCH single workout'})
})


module.exports = router