import express from 'express';
import bodyParser from 'body-parser';

let app = express();

app.use(express.static('client'));
app.use(bodyParser.urlencoded());

app.use('/character', function(req,res){
  console.log('Request to character');
});

app.listen(process.env.PORT || 3000, function(){
  console.log('Server is listening on port 3000');
});

module.exports = app;
