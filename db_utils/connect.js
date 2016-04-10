var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');
var insertDocuments = require('./insert.js');

// mock data
var data = [];


// Connection URL
var url = 'mongodb://localhost:27017/app';
// Use connect method to connect to the Server
function upload(file) {
	MongoClient.connect(url, function(err, db) {
		assert.equal(null, err);
		console.log("Connected correctly to server!\n");
		data.push(file);
		insertDocuments(db, data, function(result) {
			// console.log(result);
			db.close();
		});
	});
}


module.exports = upload;