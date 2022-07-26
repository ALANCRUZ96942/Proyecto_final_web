// Dependencies
// =============================================================
var express = require("express");
var cors = require("cors")
const mongoose = require("mongoose");
const multer = require("multer");
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 4000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(multer({
  dest: path.join(__dirname,'src/img')
}).single('image'));


/*Integracion mogoose*/

const usuario = "master"
const password = "Password123"
const dbName = "learn"

//const uri = `mongodb+srv://${usuario}:${password}@cluster0.ncdk5.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const uri = `mongodb+srv://master:${password}@cluster0.jxrv7.mongodb.net/${dbName}?retryWrites=true&w=majority`;

 mongoose.connect(uri,
{ useNewUrlParser: true, useUnifiedTopology: true }
)
.then(()=> console.log('conectado a mongodb')) 
.catch(e => console.log('error de conexión', e));

const Course = require("./models/Course");
/*
var dummyCourses = [
  {
    "id": 1,
    "slug": "js",
    "name": "Javascript",
    "description": "lorem",
    "image": "",
    "lessons": [{
      "lesson1": {
        "title": "primera clase",
        "video": "htttp://linkyoutube"
      },
      "lesson2": {
        "title": "primera clase",
        "video": "htttp://linkyoutube"
      },
      "lesson3": {
        "title": "primera clase",
        "video": "htttp://linkyoutube"
      },
      "lesson4": {
        "title": "primera clase",
        "video": "htttp://linkyoutube"
      }
  }]
  },
  { 
    "id": 2,
    "slug": "java",
    "name": "Java",
    "description": "lorem",
    "image": ""
  },
  {
    
    "id": 3,
    "slug": "c",
    "name": "C y C++",
    "description": "lorem",
    "image": ""
  },
  {
    "id": 4,
    "slug": "js2",
    "name": "Javascript2",
    "description": "lorem",
    "image": ""
    
  },
  { 
    "id": 5,
    "slug": "java2",
    "name": "Java2",
    "description": "lorem",
    "image": ""
  },
  {
    
    "id": 6,
    "slug": "c2",
    "name": "C y C++2",
    "description": "lorem",
    "image": ""
  },
  {
    "id": 7,
    "slug": "js2",
    "name": "Javascript2",
    "description": "lorem",
    "image": ""
  },
  { 
    "id": 8,
    "slug": "java2",
    "name": "Java2",
    "description": "lorem",
    "image": ""
  },
  {
    
    "id": 9,
    "slug": "c3",
    "name": "C y C++3",
    "description": "lorem",
    "image": ""
  },
    {
    "id": 10,
    "slug": "js3",
    "name": "Javascript",
    "description": "lorem",
    "image": ""
  },

];
*/


app.get("/api/courses", async function(req, res) {
  try {
    const Courses = await Course.find();
    console.log(Courses);
    return res.json(Courses);

  } catch (error) {
    console.log("Error");
  }

});

app.get("/",(req,res) =>{
  res.send("Bienvenido");
});
/*
app.get("/api/courses/:course", function(req, res) {
  var chosen = req.params.course;

  console.log(chosen);

  for (var i = 0; i < dummyCourses.length; i++) {
    if (chosen === dummyCourses[i].slug) {
      return res.json(dummyCourses[i]);
    }
  }

  return res.json(false);
});*/


// Create New Course
app.post("/api/courses/create", async function(req, res) {
  console.log(req.body);

  //let newcourse = new Course(req.body);
  //await newcourse.save();
  //res.json(newcourse);
});

//delete
app.post("/api/courses/delete/:id", async (req, res) => {

  let curso = await Course.findById(req.params.id)
  if (curso){
    await curso.delete()
    res.json({ msg: "Course deleted" })
  }
  else {
    res.json({ msg: "Course not delete task" })
  }


});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
