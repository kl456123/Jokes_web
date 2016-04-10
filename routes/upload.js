var express = require('express');
var router = express.Router();
var insert = require('../db_utils/connect');
var fs = require('fs');
var path = require('path');
var src = path.join(__dirname, '../data/mock.json');
var exportObj = require('../db_utils/utils.js');


var findDocument = exportObj.findDocument;


router
	.route('/')
	.get(function(req, res) {
		res.render('index', {
			title: 'Express'
		});
	})
	.post(function(req, res) {
		insert(req.body);
		res.redirect('/getStory');
	});


router
	.route('/getStory')
	.get(function(req, res) {
		//change to read data from database(mongodb)
		//It is just for convenience....
		// fs.readFile(src, {
		// 	encoding: 'utf8',
		// 	flag: 'r'
		// }, function(error, data) {
		// 	var file = JSON.parse(data);
		// 	if (error) throw error;
		// 	res.send(data);
		// });
		//
		findDocument({})
			.then(function(docs) {
				// It must be stringifyed.
				res.end(JSON.stringify(docs));
			})
			.catch(function(error) {
				console.log(error.stack);
			});

	});

router
	.route('/postData')
	.post(function(req, res) {
		console.log('asdfaf');
		res.send("asffas");
	});


// test route
router
	.route('/test')
	.get(function(req, res) {
		res.send("welcome to visit!");
	})
	.post(function(req, res) {
		var data = req.body;
		console.log(data);
		res.send(data);
	});

// mongodb database server restful API
router
	.route('/api')
	.get(function(req, res) {
		res.writeHead(200, {
			'Content-Type': 'text/html',
		});
		findDocument() //find all document in database.
			.then(function(docs) {
				console.log(JSON.stringify(docs));
				res.write("<!DOCTYPE html>" + "<html>" + "<head>" + "	<title>api</title>" + "	<meta charset='utf-8'/>" + "</head>" + "<body>");
				res.write(JSON.stringify(docs));
				res.write("</body></html>");
				res.end();
			})
			.catch(function(error) {
				console.log(error.message);
				console.log(error.stack);
				res.end('fail');
			});
		// res.end();
	});

module.exports = router;