const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

let User = require('./User');

//create new user and save in db
router.post('/', function (req, res) {
    User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        }, 
        function (err, user) {
            if (err) return res.status(500).send("Unable to save in database.");
            res.status(200).send(user);
        });
});

//find all user from database
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("Error to finding the users from db");
        res.status(200).send(users);
    });
});


//find single user from database
router.get('/:id', function(req, res){
    User.findById(req.params.id, function(err, users){
        if (err) return res.status(500).send("Problem to find user");
        res.status(200).send(users);
    }); 
});


//update sigle user in database
router.put('/:id', function(req, res){
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, users){
        if (err) return res.status(500).send("Error to update user in db");
        res.status(200).send(users);
    });
});

//Delete single user from the database
router.delete('/:id', function(req, res){
    User.findByIdAndRemove(req.params.id, function(err, users){
        if (err) return res.status(500).send("Erro to delete user in db");
        res.status(200).send(users);
    });
});




module.exports = router;