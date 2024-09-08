const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./models/user')


const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));



// const User = mongoose.model('User', userSchema);

// Routesapp.use(express.static(path.join(__dirname, 'public')));


app.get("/home", (req, res) => {
  res.render('home', { title: "Tanmay Is Pookie"})
})

app.get('/', function(requset, response){
  response.render('signup')
})


app.post('/signup', async function(req, res){
  const { username, email, password} = req.body;
  try{
    const newUser = new User({username, email, password});
    await newUser.save();
    res.send(`${username} welcome `)
  }catch(err){
    console.log(err)
  }
})

// app.post('/login', async function(req, res){
  
// })

// app.get('/home', function(req, res){
//   res.render('home')
// })
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
























































































































