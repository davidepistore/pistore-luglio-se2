
const express = require('express'),
    bodyParser = require('body-parser');

var router = express.Router();

const PORT = process.env.PORT || 3000;


var squadre = [];
var number=0;

function createTeam(id, name, is_still_in, matches){
	var team = {
		id: number+1,
		name: name,
		is_still_in: is_still_in,
		matches: matches
	}
	number = number + 1;
	squadre.push(team);
}


router.get('/getTeams', function (req, res) {
	var id = req.query.id;
	if(id == undefined){
		if(!(squadre.length == 0)){
		res.json(squadre);
		}else{
			res.json({
				"code": 200,
				"response": "non ci sono squadre"
			});
		}
}});

router.post('/addTeam', function (req, res) {
	if(req.body.id!=undefined && req.body.name!=undefined && req.body.is_still_in!=undefined && req.body.matches!=undefined){
    	createTeam(req.body.id, req.body.name, req.body.is_still_in,req.body.matches);
		res.send("team creato");
	}else{
		res.send("unexpected error");
	}
})

router.get('/:teamID', function (req, res) {
    const teamID = req.params.teamID
    const i = squadre.findIndex(item => {return item.id === teamID})
    if (i==-1) res.sendStatus(404)
    else {
        res.status=200
        res.json(squadre[i])
    }
})


app.listen(PORT, function(){
    console.log("Node is running on port",PORT);
});