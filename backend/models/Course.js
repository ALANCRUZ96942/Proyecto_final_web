const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  id: Number,
  slug: String,
  name:  String,
  description: String,
  image : String,
  lessons: [{ title: String, content: String, video: String }]

});

// Crear el modelo
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;