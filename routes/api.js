var express = require('express');
var router = express.Router();

//---team existence---------------------------------////////
//create team
router.post('/teams/create', function(req, res) {

});
//delete team
router.post('/teams/delete', function(req, res) {

});

//---intra-team changes-----------------------------////////
//get team info
router.get('/team/:team_id', function(req, res) {

});
//add user
router.post('/team/:team_id/add_user', function(req, res) {

});
//remove user
router.post('/team/:team_id/del_user', function(req, res) {

});
//add/remove points
router.post('/team/:team_id/edit_score', function(req, res) {

});
//complete challenge
router.post('/team/:team_id/:challenge_id/complete', function(req, res) {

});
//un-complete challenge
router.post('/team/:team_id/:challenge_id/uncomplete', function(req, res) {

});

//---challenges-------------------------------------////////
//create challenge
router.post('/challenges/create', function(req, res) {

});
//delete challenge
router.post('/challenges/delete', function(req, res) {

});

//---challenges-------------------------------------////////
//get challenge info
router.get('/challenge/:challenge_id', function(req, res) {

});
//finalize score specifying order of scoring
router.post('/challenge/:challenge_id/finalize', function(req, res) {

});
//reopen/delete finalized scores
router.post('/challenge/:challenge_id/reopen', function(req, res) {

});
//edit info of challenge
router.post('/challenge/:challenge_id/edit', function(req, res) {

});


//---images-----------------------------------------////////
//upload image
router.post('/images/upload', function(req, res) {

});




module.exports = router;
