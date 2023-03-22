const db = require('../config/connection');
const { Exercises, Routines } = require('../models');

const exerciseData = require('./exerciseData.json');
const routineData = require('./routineData.json');

db.once('open', async () => {
  await Exercises.deleteMany({});
  await Routines.deleteMany({});

  const exercises = await Exercises.insertMany(exerciseData);
  const routines = await Routines.insertMany(routineData)

  console.log('exercises seeded!');
  process.exit(0);
});