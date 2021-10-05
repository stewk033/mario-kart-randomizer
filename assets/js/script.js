/* Javascript for Mario Kart Randomizer App
Two seperate APIs will be added
https://github.com/samyvera/mk8_node_api
& TBD
Pseudocode Below */

// Mario Kart API
fetch('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/name?q=mario', {
	method: "GET",
	headers: {"Content-type": "application/json;charset=UTF-8", "authorization": "Bearer YOUR_BEARER"}
})
 .then(response => response.json()) 
 .then(json => console.log(json));

 // Mario KArt Playlist Search API / Spotify - IN PROGRESS
 fetch('https://api.spotify.com/v1/search?q=mario%20kart&type=playlist'), {
     method: "GET",
     headers: {"Content-type": "application/json;charset=UTF-8", "authorization": "Bearer BQD3sTEvwnaZU1A4QDhRKVQYQ118pC8fqjz3q1DRB2PCntVSklllfjT0FlZf150NK40DVmLrNekmM4cVpgKneu3dFUwpDUNmGETHz0xtlOFa7jXwMrRqoyWIVaWaE6MN-yoWe5I-C9_0AtyOm0LhdsfjuflnXiU"}
 }
    .then(response => response.json())
    .then(json => console.log(json));

// Show current date at top of page
Date()

// define variables in accordance with the html file

// if nothing is in localStorage, assign random character/car/course combination
// Place Code Here

window.localStorage.setItem('name', 'user');

const person = {
    name: 'user',
}

window.localStorage.setItem('user', JSON.stringify(person));

// if there is a favorited character/car/course combination in localStorage, have that appear when user loads page
// Place Code Here

// Enable buttons from Bulma to be used:
// Buttons for "generate combination" & a button for "start over/clear"
// Place Code Here

// Link APIs and Bulma library here - make sure to list BASE libraries first so that the additional ones will work

// Buttons can be found here: https://bulma.io/documentation/elements/button/
// Cards can be found here (could be used for where the character appears?): https://bulma.io/documentation/components/card/
// Columns can be found here (could be used for 4 player spots on app): https://bulma.io/documentation/columns/basics/

// Generate a random character when the user clicks on the Generate button
// Place Code Here

// If the user is not happy with the generated character, allow them to re-click the button to run the function again
//Place Code Here

// Generate a random course when the user clicks on the Generate button
// Place Code Here

// If the user wishes to clear stored data, they press the "clear" button
window.localStorage.clear();