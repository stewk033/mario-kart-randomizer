fetch('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/name?q=mario', {
	method: "GET",
	headers: {"Content-type": "application/json;charset=UTF-8", "authorization": "Bearer YOUR_BEARER"}
})
 .then(response => response.json()) 
 .then(json => console.log(json));