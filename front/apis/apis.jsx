let $ = require('jquery');
let apis = {
	get: function(url) {
		return new Promise(function(resolve, reject) {
			$.get(url, function(data) {
					/*optional stuff to do after success */
					resolve(data);
				})
				.error(function(obj, text, error) {
					/* Act on the event */
					reject(error);
				});

		});
	},
	post: function(url, postData) {
		return new Promise(function(resolve, reject) {
			$.post(url, postData, function(data, textStatus, xhr) {
					/*optional stuff to do after success */
					resolve(data);
				})
				.error(function(obj, text, error) {
					/* Act on the event */
					reject(error);
				});
		});
	}
};


export default apis;