function getStory() {
	// $.post('/getStory', null, function(data) {
	// 	optional stuff to do after success 
	// 	console.log("successwqeq!\n");
	// 	console.log(data.name);
	// });
	$.post('/getStory', null, function(data, textStatus, xhr) {
		/*optional stuff to do after success */
		console.log("successwqeq!\n");
		var file = JSON.parse(data);
		console.log(file.content);

	});
}