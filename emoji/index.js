"use strict";

let emojis = [];

// TODO: fetch your data
fetch("https://emoji-api.com/emojis?access_key=445e15d2e82d0a2afb9a33e3b52e76baf87b2131")
	// TODO: use then to wait for the result
	.then(function (response) {
		return response.json();
	})

	// TODO: load the json from the reponse
	.then(function (data) {
		console.log(data);
		emojis = data;
		console.log(emojis);

		emojis.forEach((element) => {
			document.querySelector("#list").insertAdjacentHTML("beforeend", element.character);
		});
	});
// TODO: in the final then function, process the data and add it to the HTML
