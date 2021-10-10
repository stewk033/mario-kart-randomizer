// Mario Kart API
fetch("https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/name?q=mario", {
  method: "GET",
  headers: {
    "Content-type": "application/json;charset=UTF-8",
    authorization: "Bearer YOUR_BEARER",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// Google Search for Mario Music API
fetch(
  "https://google-search3.p.rapidapi.com/api/v1/search/q=mario+kart+music",
  {
    method: "GET",
    headers: {
      "x-user-agent": "desktop",
      "x-rapidapi-host": "google-search3.p.rapidapi.com",
      "x-rapidapi-key": "69b564f0f1mshb07fa8261424345p1ad4fbjsn87bfd14a7d5e",
    },
  }
)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });

// Show current date at top of page
var currentdate = new Date();
var dd = String(currentdate.getDate()).padStart(2, "0");
var mm = String(currentdate.getMonth() + 1).padStart(2, "0");
var yyyy = currentdate.getFullYear();

currentdate = mm + "/" + dd + "/" + yyyy;
console.log(currentdate);
// Show current date at top of page
Date();

// define variables in accordance with the html file

// if nothing is in localStorage, assign random character/car/course combination
// Place Code Here

window.localStorage.setItem("name", "user");

const person = {
  name: "user",
};

window.localStorage.setItem("user", JSON.stringify(person));

// if there is a favorited character/car/course combination in localStorage, have that appear when user loads page
// Place Code Here

// random Mario Kart playlist rom Spotify
var playlistSearch = document.querySelector(".playlistSearch");

playlistSearch.addEventListener("click", function () {
  fetch(
    "https://google-search3.p.rapidapi.com/api/v1/search/q=mario+kart+music+youtube+soundtrack",
    {
      headers: {
        "x-user-agent": "desktop",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "69b564f0f1mshb07fa8261424345p1ad4fbjsn87bfd14a7d5e",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(JSON.stringify(data.results));
      let musicResults = data.results;
      let youtubeUrl = musicResults[0].link + "&output=embed";
      console.log(musicResults[0].link);
      const embeddedVideo = $("<iframe>").attr("src", youtubeUrl);
      embeddedVideo.attr("target", "_parent");
      $("#container").append(embeddedVideo);
    });

  //   function prepareFrame() {
  //     var ifrm = document.createElement("iframe");
  //     ifrm.setAttribute(
  //       "src",
  //       "https://www.youtube.com/embed/" + str.slice(30, 40)
  //     );
  //     ifrm.style.width = "640px";
  //     ifrm.style.height = "480px";
  //     document.body.appendChild(ifrm);
  //   }
});

// If the user wishes to clear stored data, they press the "clear" button
window.localStorage.clear();

// var randomDriver = document.querySelector(".randomDriver")
// var listOfDrivers = document.querySelector(".listOfDrivers")
// var showList = document.querySelector(".showList")
// var listOfCourses = document.querySelector(".listOfCourses")
// var randomKart = document.querySelector(".randomKart")
// var randomCourse = document.querySelector(".randomCourse")

// var apiSearch = function(){
//     fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/super')
//         .then(response => response.json())
// }

// // list of all drivers
// listOfDrivers.addEventListener('click', function(){
//     fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/super')
//         .then(response => response.json())
//         .then(data => {

//             for (let i= 0; i< data.length; i++) {
//                 var driverName = data[i]['name']
//                 var list = document.createElement('li')
//                 var list = document.createElement('button')
//                 list.textContent = driverName
//                 showList.appendChild(list)

//                 console.log(driverName)
//             }

//             // console.log(data)
//         })

// })

// var saveLikes.function(){
//     listOfDrivers(this.textContent)
//     console.log(this.textContent)
// }

// random all drivers
// randomDriver.addEventListener('click', function(){

// // list of all drivers function
// var listOfDriversApi = function(){
//     fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/super')
//     .then(response => response.json())
//     .then(data => {

//         for (let i= 0; i< data.length; i++) {
//             var driverName = data[i]['name']
//             var list = document.createElement('li')
//             var list = document.createElement('button')
//             list.textContent = driverName
//             showList.appendChild(list)

//             console.log(driverName)
//         }
//     })
// }

// list of all drivers event listener
// listOfDrivers.addEventListener('click', function(){
//     listOfDriversApi();

// })

// // random drivers function
// var randomDriverApi = function(){

//     fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/super')
//         .then(response => response.json())
//         .then(data => {
//             var num = Math.floor(Math.random() * data.length)
//             var random = data[num]['name']
//             console.log(random)
//             randomDriver.innerHTML= random

//         })

// }

// listOfCourses.addEventListener('click', function(){
//     fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/courses/normal',{
//         method: "GET",
//         headers: {"Content-type": "application/json;charset=UTF-8"}
//     })
//         .then(response => response.json())
//         .then(data => {

//             for (let i= 0; i< data.length; i++) {
//                 var kartName = data[i]['name']
//                 var listKart = document.createElement('li')
//                 listKart.textContent = kartName
//                 showList.appendChild(listKart)

//                 console.log(kartName)
//             }

// console.log(data)

//     })
// })
// randomCourse.addEventListener('click', function(){
//     fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/courses/normal')
//         .then(response => response.json())
//         .then(data => {
//             var num = Math.floor(Math.random() * data.length)
//             var random = data[num]['name']
//             console.log(random)
//             randomCourse.innerHTML= random

//         })

// })

// }

// // random all drivers event listener
// randomDriver.addEventListener('click', function(){
//     randomDriverApi();
// })

// // list of all the courses function
// var listOfCoursesApi = function(){
//     fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/courses/normal')

//     .then(response => response.json()
//     .then(data => {

//         for (let i= 0; i< data.length; i++) {
//             var kartName = data[i]['name']
//             var listKart = document.createElement('li')
//             listKart.textContent = kartName
//             showList.appendChild(listKart)

//             console.log(kartName)
//         }

//     }))
// }

// // list of courses event listener
// listOfCourses.addEventListener('click', function(){
//     listOfCoursesApi();

//     })

// // random course function
// var randomCourseApi = function(){
//     fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/courses/normal')
//     .then(response => response.json())
//     .then(data => {
//         var num = Math.floor(Math.random() * data.length)
//         var random = data[num]['name']
//         console.log(random)
//         randomCourse.innerHTML= random

//     })
// }

// // random course event listener
// randomCourse.addEventListener('click', function(){
//     randomCourseApi();

// })

// // Defines
// var random = localStorage.getItem("key");
// console.log("random");

// // Stores the Information
// localStorage.setItem("random", randomDriver.addEventListener);
// console.log("localStorage.setItem");
// // Retrieves the Information
// document.getElementById = localStorage.getItem("random");
// console.log("localStorage.getItem");

// let searchHistory = JSON.parse(localStorage.getItem("random"))

// // Check browser support
// if (typeof(Storage) !== "undefined") {
//     // Store
//     localStorage.setItem("random", "randomDriver");
//     // Retrieve
//     document.getElementById("result").innerHTML = localStorage.getItem("random");
//   } else {
//     document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
//   }
