"use strict"

const URL = 'http://icanhazdadjoke.com/search';
const MAX_JOKE_GENERATED = 10;
let $div = $('div');

/**
 * getDadjokes : an async function that returns a list of jokes
 * @returns {Array | Object} Array of Objects 
 */
async function getDadJokes() {
	// {limit:MAX_JOKE_GENERATED, term:""}
	// Per Website Request, add user agent
	const USER_AGENT = "My Library (https://www.github.com/jragni/Dad-Joke-Generator";
	let Accept = "application/json";
	let jokes = await axios.get(URL,{headers:{Accept}, params:{limit:MAX_JOKE_GENERATED}});
	console.log(jokes.data.results)
	return jokes.data.results;
}

