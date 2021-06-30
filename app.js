"use strict"

const URL = 'http://icanhazdadjoke.com/search';
const MAX_JOKE_GENERATED = 10;
let $main = $('.main-content');

/**
 * getDadjokes : an async function that returns a list of jokes
 * @returns {Array | String} Array of Objects 
 */
async function getDadJokes() {
	// {limit:MAX_JOKE_GENERATED, term:""}
	// Per Website Request, add user agent
	const USER_AGENT = "My Library (https://www.github.com/jragni/Dad-Joke-Generator";
	let Accept = "application/json";
	let response = await axios.get(URL,{headers:{Accept}, params:{limit:MAX_JOKE_GENERATED}});

	// convert jokes into an array
	let jokes = (response.data.results).map(joke =>joke.joke);
	return jokes
}

async function main(){
	// get jokes
	let jokes = await getDadJokes();
	console.log(jokes)
	jokes.forEach(joke => {
		let $div = $('<div>');
		$div
			.addClass('main-content__joke-box')
			.text(joke);
		$main.append($div);
	})
}	

main();
