var $ = require('jquery');
var getData = new Promise(function(reslove, reject) {
	display("success");
	$.getJSON('/data/mock.json', function(data) {
			/*optional stuff to do after success */
			reslove(data);
		})
		.error(function(obj, txt, err) {
			/* Act on the event */
			reject(err);
		});
});

function display(msg) {
	console.log(msg);
}

getData.then(function(data) {
		// console.log(data);
		display(data);
	})
	.catch(function(err) {
		// console.log(err);
		display(err);
	});