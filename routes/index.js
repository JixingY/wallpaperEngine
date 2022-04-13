var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var posts=[];
var newposts=[];

router.post('/posts', function(req, res, next) {
    res.json(posts);
});


router.post('/newposts', function(req, res, next) {
    //console.log(posts);
    res.json(newposts);
});

router.post('/addpost', function(req, res, next) {
    if("newcontent" in req.body) {
        newposts=[];
        posts.push(req.body);
        newposts.push(req.body);
        res.end();
    } else {
        res.sendStatus(400);
    }
});

module.exports = router;