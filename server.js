import Sequelize from 'sequelize';
import express from 'express';
import bodyParser from 'body-parser';

let pgURI = 'postgres://localhost/starwars'
let sequelize = new Sequelize(pgURI);

let User = sequelize.define('users', {
  name : {type : Sequelize.STRING},
  species : {type : Sequelize.STRING},
  gender : {type : Sequelize.STRING},
  birthyear : {type : Sequelize.STRING},
  homeworld : {type : Sequelize.STRING}
});

User.sync();
User.belongsToMany(User, {through: 'friends_table', as: 'friends'});

let app = express();

app.use(express.static('client'));
app.use(bodyParser.urlencoded());

app.get('/users', function(req, res) {
  User
    .findAll({})
    .then(function(users) {
      console.log(users);
      res.send(users);
    });
});

app.get('/friends', function(req, res) {
  console.log(req.query);
  User
    .findOne({where: req.query})
    .then(function (user) {
      console.log('user is', user);
      user
        .getFriends({})
        .then(function(friends) {
          console.log('got friends', friends);
          res.send(friends);
        });
    });
});

app.listen(process.env.PORT || 3000, function(){
  console.log('Server is listening on port 3000');
});

module.exports = app;
