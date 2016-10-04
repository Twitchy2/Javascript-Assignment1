var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Logan Sikora-Beder' });
});

/* GET all the people */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me'});
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me'});
});


module.exports = router;
