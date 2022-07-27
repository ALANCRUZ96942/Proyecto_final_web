// Dependencies
// =============================================================
var express = require("express");
var cors = require("cors")
const mongoose = require("mongoose");
const multer = require("multer");
var path = require('path');
const dotenv = require("dotenv")
const indexRoutes = require("./routes/routeindex")

dotenv.config()


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


// Create New Course
app.post("/api/courses/create", async function(req, res) {
  //console.log(req.body);
 let newcourse = new Course(req.body);
  await newcourse.save();
  res.json(newcourse);
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

//Login
app.use('/',indexRoutes)


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
