


var express = require('express');
var router = express.Router();
var likesObject = {
phil: 0,
arri: 0,
ed: 0,
celina: 0
};

function likesObjectFunc (req, res) {

  res.send(likesObject);
}


// router.use(bodyParser.urlencoded({extended: true}));  // NOTE: NEEDED?
//
// router.get('/', function(req, res){
//   res.send(likesObject);
// });

module.exports = likesObjectFunc;
