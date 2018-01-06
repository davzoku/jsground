var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var Schema = mongoose.Schema;
//var mongo = require('mongodb');
//var assert = require('assert');

//connection url to test database on mongodb
//not using native driver
//var url = 'mongodb://localhost:27017/test';

//define schema
var userDataSchema = new Schema({
  title: {type: String, required: true},
  content: String,
  author: String
}, {collection: 'user-data'});

//create model
var UserData = mongoose.model('UserData', userDataSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Form Validation', success: req.session.success, errors: req.session.errors });
  res.session.errors = null; // clear errors
});

router.post('/submit', function(req, res, next){
  // Check validity
  req.check('email', 'Invalid email address').isEmail();
  req.check('password', 'Password is invalid').isLength({min: 4}).equals(req.body.confirmPassword);
  //check if password == confirmPassword
  var errors = req.validationErrors();
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
  } else {
    req.session.success = true;
  }
  res.redirect('/');
});

router.get('/mongodb', function(req, res, next) {
  res.render('mongodb');
});

router.get('/mongodb/get-data', function(req, res, next) {
  UserData.find()
      .then(function(doc) {
        res.render('mongodb', {items: doc});
      });
});

router.post('/mongodb/insert', function(req, res, next) {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };

  var data = new UserData(item);
  data.save();

  res.redirect('/mongodb');
});

router.post('/mongodb/update', function(req, res, next) {
  var id = req.body.id;

  UserData.findById(id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    doc.title = req.body.title;
    doc.content = req.body.content;
    doc.author = req.body.author;
    doc.save();
  })
  //res.redirect('/mongodb');
});

router.post('/mongodb/delete', function(req, res, next) {
  var id = req.body.id;
  UserData.findByIdAndRemove(id).exec();
  //res.redirect('/mongodb');
});

module.exports = router;
