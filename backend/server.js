// Dependencies
// =============================================================
var express = require("express");
var cors = require("cors")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 4000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())



var dummyCourses = [
  {
    id: 1,
    slug: "js",
    name: "Javascript",
    description: "lorem"
  },
  { 
    id: 2,
    slug: "java",
    name: "Java",
    description: "lorem"
  },
  {
    
    id: 3,
    slug: "c",
    name: "C y C++",
    description: "lorem"
  }
];


app.get("/api/courses", function(req, res) {
  return res.json(dummyCourses);
});


app.get("/api",(req,res) =>{
  res.send("Bienvenido");
});

app.get("/api/courses/:course", function(req, res) {
  var chosen = req.params.course;

  console.log(chosen);

  for (var i = 0; i < dummyCourses.length; i++) {
    if (chosen === dummyCourses[i].slug) {
      return res.json(dummyCourses[i]);
    }
  }

  return res.json(false);
});


// Create New Course
app.post("/api/courses", function(req, res) {
 
  var newcourse = req.body;

  // Using a RegEx Pattern to remove spaces from newcourse
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newcourse.slug = newcourse.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcourse);

  dummyCourses.push(newcourse);

  res.json(newcourse);
});




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
