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
var currentdate = new Date();
var dd = String(currentdate.getDate()).padStart(2, "0");
var mm = String(currentdate.getMonth() + 1).padStart(2, "0");
var yyyy = currentdate.getFullYear();

currentdate = mm + "/" + dd + "/" + yyyy;
console.log(currentdate);


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

// // Defines

var randomDriver = document.querySelector(".randomDriver")
var listOfDrivers = document.querySelector(".listOfDrivers")
var showList = document.querySelector(".showList")
var listOfCourses = document.querySelector(".listOfCourses")
var randomCourse = document.querySelector(".randomCourse")
var saveDriver = document.querySelector(".saveDriver")
var saveCourse = document.querySelector(".saveCourse")




var apiSearch = function(){
    fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/super')
        .then(response => response.json())
}


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



var driversList = []; 
// random drivers function
var randomDriverApi = function(){
    var random;
    fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/super')
        .then(response => response.json()) 
        .then(data => {
            var num = Math.floor(Math.random() * data.length)
            random = data[num]['name']
            console.log(random)
            randomDriver.innerHTML= random
            driversList.push(random);
            console.log(driversList);


        //     saveDriver.addEventListener('click', function(){
        //         localStorage.setItem('driver', random)
        //         var saved = localStorage.getItem('driver')
        //         console.log(saved)

        //         var list = document.createElement('li')
        //         list.textContent = random
        //         showList.appendChild(list)

           
        // })
        })


    // save characters
    

return random;
}

// random all drivers event listener
randomDriver.addEventListener('click', function(){
    randomDriverApi();  
})


// save random driver
saveDriver.addEventListener('click', function(){
        
        localStorage.setItem('driver', JSON.stringify(driversList))


            var saved = JSON.parse(localStorage.getItem('driver'))
            // var saving = JSON.parse(saved)
            // console.log(saving)

    
        var list = document.createElement('li')
        list.textContent = driversList
        showList.appendChild(list)
 
})




// list of all the courses function
var listOfCoursesApi = function(){

    fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/courses/normal')
        
    .then(response => response.json() 
    .then(data => {

        for (let i= 0; i< data.length; i++) {
            kartName = data[i]['name']
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



var courseList = [];
// random course function
var randomCourseApi = function(){
    var random;
    fetch ('https://mario-kart-tour-api.herokuapp.com/api/v1/courses/normal')
    .then(response => response.json()) 
    .then(data => {
        var num = Math.floor(Math.random() * data.length)
        random = data[num]['name']
        console.log(random)
        randomCourse.innerHTML= random
        courseList.push(random);
        console.log(courseList);


    })
    return random;
}

// random course event listener
randomCourse.addEventListener('click', function(){
    randomCourseApi()
})

// recent courses event listener
saveCourse.addEventListener('click', function(){
        
    localStorage.setItem('course', JSON.stringify(courseList))


        var saved = JSON.parse(localStorage.getItem('course'))
        // var saving = JSON.parse(saved)
        // console.log(saving)


    var list = document.createElement('li')
    list.textContent = courseList
    showList.appendChild(list)

    if (list>5){
        

    }

})

