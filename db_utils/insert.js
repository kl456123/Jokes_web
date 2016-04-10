'use strict';

/*jshint node: true*/

let assert = require('assert');

var insertDocuments = function(db, data, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany(data, function(err, result) {
    assert.equal(err, null);
    // assert.equal(3, result.result.n);
    // assert.equal(3, result.ops.length);
    // console.log("Inserted 3 documents into the document collection");
    console.log("success!\n");
    callback(result);
  });
};

module.exports = insertDocuments;