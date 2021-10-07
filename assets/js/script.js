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

 // Mario Kart Playlist Search API / Spotify - IN PROGRESS
 fetch("https://google-search3.p.rapidapi.com/api/v1/search/q=mario+kart+music", {
	"method": "GET",
	"headers": {
		"x-user-agent": "desktop",
		"x-rapidapi-host": "google-search3.p.rapidapi.com",
		"x-rapidapi-key": "69b564f0f1mshb07fa8261424345p1ad4fbjsn87bfd14a7d5e"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

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

// random Mario Kart playlist rom Spotify
var playlistSearch = document.querySelector(".playlistSearch")

playlistSearch.addEventListener('click', function() {
    fetch ('https://google-search3.p.rapidapi.com/api/v1/search/q=mario+kart+music')
    .then(response => response.json())
    // .then(data => {
        // var num = Math.floor(Math.random() * data.length)
        // // var random = data[num]['name']

    // playlist.innerHTML = random

    })


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





var babyDrivers = document.querySelector(".babyDrivers")
var allDrivers = document.querySelector(".allDrivers")
var highEndDrivers = document.querySelector(".highEnd")
var character = document.querySelector('.character')

// random baby drivers
babyDrivers.addEventListener('click', function(){
    fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/babies')
        .then(response => response.json()) 
        .then(data => {
            var num = Math.floor(Math.random() * data.length)
            var random = data[num]['name']

            character.innerHTML= random


           
        })
        
})

// random all drivers
allDrivers.addEventListener('click', function(){
    fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers')
        .then(response => response.json()) 
        .then(data => {
            var num = Math.floor(Math.random() * data.length)
            var random = data[num]['name']

            character.innerHTML= random


        })
        
})

// random high end drivers
highEndDrivers.addEventListener('click', function(){
    fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/high_end')
        .then(response => response.json()) 
        .then(data => {
            var num = Math.floor(Math.random() * data.length)
            var random = data[num]['name']

            character.innerHTML= random


            console.log(num)
            console.log(random)
            console.log(data)
        })
        
})
