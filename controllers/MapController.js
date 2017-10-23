var express = require('express'); 
var request = require('request');
var access_token = '6257096319.e029fea.43e4237104e440e7beb9ccb2725d363d';
var r = express.Router();

r.get('/', function(req, res) {
    var vm = {
        layout: false
    };
    res.render('Map/index', vm);
});

r.get('/Media', function(req, res) {
    var id = req.query.locationId;
    //console.log(id);

    var options = {
        url: 'https://api.instagram.com/v1/locations/'+ id +'?access_token=' + access_token,
        method: 'GET'
    }

    //console.log(options);
    request(options, function(err, response, body){
        if(!err && response.statusCode == 200){
            
            var json = JSON.parse(body);
            console.log(json);
            var name = json.data.name;
            var vm = {
                name: name,
                id: id,
                layout: false
            };
            res.render('Map/media', vm);
        } else{
            console.log(err);
            var name = 'Media';
            var vm = {
                name: name,
                id: id,
                layout: false
            };
            res.render('Map/media', vm);
        }
    });

    
});

module.exports = r;