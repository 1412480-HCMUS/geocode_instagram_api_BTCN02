var express = require('express');
var request = require('request');
var router = express.Router();
var access_token = '6257096319.e029fea.43e4237104e440e7beb9ccb2725d363d';

router.get('/GetLocation', function(req, res, next) {
	var lat = req.query.lat;
	var lng = req.query.lng;

    var options = {
   		url: 'https://api.instagram.com/v1/locations/search?lat='+ lat +'&lng='+ lng +'&access_token=' + access_token,
   		method: 'GET'
    }

    //console.log(options);
    request(options, function(err, response, body){
   		if(!err && response.statusCode == 200){
   			//console.log(body);
   			res.json(JSON.parse(body));
   		} else{
   			console.log(err);
   		}
    });
});

router.get('/GetMedia', function(req, res, next) {
	var id = req.query.locationId;

    var options = {
   		url: 'https://api.instagram.com/v1/locations/'+ id +'/media/recent?access_token=' + access_token,
   		method: 'GET'
    }

    //console.log(options);
    request(options, function(err, response, body){
   		if(!err && response.statusCode == 200){
   			//console.log(body);
   			res.json(JSON.parse(body));
   		} else{
   			console.log(err);
   		}
    });
});

router.get('/GetMediaPagination', function(req, res, next) {
	var url = req.query.pagination;
	if(url) {
		var options = {
			url: url,
			method: 'GET'
		}

	    //console.log(options);
	    request(options, function(err, response, body){
	    	if(!err && response.statusCode == 200){
	   			//console.log(body);
	   			res.json(JSON.parse(body));
	   		} else{
	   			console.log(err);
	   		}
	   	});
	} else {
		return res.status(404).send("status 404");
	}
   
});




module.exports = router;
