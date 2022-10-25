const express = require('express')
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

const courses = require("./data/courses.json")

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/courses', (req, res) => {
  res.send(courses)
})
app.get('/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id)
  const selectedCourse = courses.find(course => course.id === id)
  console.log(selectedCourse)
  res.send(selectedCourse)
})

app.listen(port, () => {
  console.log(`This app listening on port ${port}`)
})