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
 fetch('https://api.spotify.com/v1/search?q=mario%20kart&type=playlist', {
     method: "GET",
     headers: {"Content-type": "application/json;charset=UTF-8", "authorization": "Bearer BQAIfpYlCjWNkjm3U-OdzNwS5ygKXKSQsrrFYRDORzdF2k2rCrVj_NtcX0NVOKhMQanWNuBmobJWLD0ovK6Q5YeADCCYViELQbrBwjDB4WCkXKE1KlT2EqV2tGPozn8BqDl9rvYzzYwwVYoC4Wt_2nZNVGkQfc0"}
 })
    .then(response => response.json())
    .then(json => console.log(json));

// Show current date at top of page
var currentdate = new Date();
var dd = String(currentdate.getDate()).padStart(2, "0");
var mm = String(currentdate.getMonth() + 1).padStart(2, "0");
var yyyy = currentdate.getFullYear();

currentdate = mm + "/" + dd + "/" + yyyy;
console.log(currentdate);


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
    fetch ('https://api.spotify.com/v1/search?q=mario%20kart&type=playlist')
    .then(response => response.json())
    .then(data => {
        var num = Math.floor(Math.random() * data.length)
        var random = data[num]['name']

    playlist.innerHTML = random

    })
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





var randomDriver = document.querySelector(".randomDriver")
var listOfDrivers = document.querySelector(".listOfDrivers")
var showList = document.querySelector(".showList")
var listOfCourses = document.querySelector(".listOfCourses")
var randomKart = document.querySelector(".randomKart")
var randomCourse = document.querySelector(".randomCourse")

// list of all drivers function
var listOfDriversApi = function(){
    fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/super')
    .then(response => response.json()) 
    .then(data => {
        
        for (let i= 0; i< data.length; i++) {
            var driverName = data[i]['name']
            var list = document.createElement('li')
            var list = document.createElement('button')
            list.textContent = driverName
            showList.appendChild(list)
           
            console.log(driverName)
        }
    })
}

// list of all drivers event listener
listOfDrivers.addEventListener('click', function(){
    listOfDriversApi();
        
})

// random drivers function
var randomDriverApi = function(){
    fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/super')
        .then(response => response.json()) 
        .then(data => {
            var num = Math.floor(Math.random() * data.length)
            var random = data[num]['name']
            console.log(random)
            randomDriver.innerHTML= random


        })
}

// random all drivers event listener
randomDriver.addEventListener('click', function(){
    randomDriverApi();  
})


// list of all the courses function
var listOfCoursesApi = function(){
    fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/courses/normal')
        
    .then(response => response.json() 
    .then(data => {
        
        for (let i= 0; i< data.length; i++) {
            var kartName = data[i]['name']
            var listKart = document.createElement('li')
            listKart.textContent = kartName
            showList.appendChild(listKart)
           
            console.log(kartName)
        }
    
    }))
}

// list of courses event listener
listOfCourses.addEventListener('click', function(){
    listOfCoursesApi();
    
    })

// random course function
var randomCourseApi = function(){
    fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/courses/normal')
    .then(response => response.json()) 
    .then(data => {
        var num = Math.floor(Math.random() * data.length)
        var random = data[num]['name']
        console.log(random)
        randomCourse.innerHTML= random


    })
}

// random course event listener
randomCourse.addEventListener('click', function(){
    randomCourseApi();
        
})
