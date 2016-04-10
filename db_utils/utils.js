var MongoClient = require('mongodb').MongoClient;


// load simple config
// then move all to a file
var url = 'mongodb://localhost:27017/scraper';
var collection = 'jokes';


var _insertDocument = function(db, data, callback) {
	db.collection(collection).insertOne(data, function(err, result) {
		// console.log('Insert Success!');
		callback(err, result);
	});
};


function insertDocument(data) {
	return new Promise(function(resolve, reject) {
		MongoClient.connect(url, function(err, db) {
			if (err) {
				reject(err);
				return;
			} else {
				_insertDocument(db, data, function(err, result) {
					if (err) {
						reject(err);
						return;
					} else {
						resolve(result);
					}
					db.close();
				});
			}
		});
	});

}

var _findDocument = function(db, index, callback) {
	var cursor;
	if (index == {}) {
		cursor = db.collection(collection).find();
	} else {
		cursor = db.collection(collection).find(index);
	}

	cursor.toArray(function(err, docs) {
		callback(null, docs);
	});

};


function findDocument(index) {
	return new Promise(function(resolve, reject) {
		MongoClient.connect(url, function(err, db) {
			if (err) {
				reject(err);
				return;
			}
			_findDocument(db, index, function(err, docs) {
				if (err) {
					reject(err);
					return;
				}
				resolve(docs);
				db.close();

			});
		});
	});
}


var _deleteDocument = function(db, index, callback) {
	db.collection(collection).deleteMany(index, function(err, results) {
		callback(err, results);
	});
};

function deleteDocument(index) {
	return new Promise(function(resolve, reject) {
		MongoClient.connect(url, function(err, db) {
			if (err) {
				reject(err);
				return;
			}
			_deleteDocument(db, index, function(err, results) {
				if (err) {
					reject(err);
					return;
				}
				resolve(results);
				db.close();

			});
		});
	});
}



var exportObj = {};
exportObj.insertDocument = insertDocument;
exportObj.findDocument = findDocument;
exportObj.deleteDocument = deleteDocument;


module.exports = exportObj;