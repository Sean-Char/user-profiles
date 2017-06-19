var express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session')
var cors = require('cors')
var config = require('./config.js')
var profileCtrl = require('./controllers/profileCtrl.js')
var userCtrl = require('./controllers/userCtrl.js')

var app = express()

app.use(cors(corsOptions))
app.use(cors({ secret: config.sessionSecret }))
app.use(bodyParser.json())
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false

}))

app.use(express.static(__dirname + '/public'));


app.post('/api/login', userCtrl.login)
app.get('/api/profiles', profileCtrl.getFriendsProfiles)


var corsOptions = {
    origin: 'http://localhost:3000'
};


app.listen(3000, function(){
    console.log('User-Profile app listening at port 3000');
})
