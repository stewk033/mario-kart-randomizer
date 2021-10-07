// var apiKey = 'AIzaSyCrmb9W0MSCCTo8pwrxYLVtcVTdCNedRKo';

// // Enter the API Discovery Docs that describes the APIs you want to
// // access. In this example, we are accessing the People API, so we load
// // Discovery Doc found here: https://developers.google.com/people/api/rest/
// var discoveryDocs = ["https://www.googleapis.com/youtube/v3/videos"];

// // Enter a client ID for a web application from the Google API Console:
// //   https://console.developers.google.com/apis/credentials?project=_
// // In your API Console project, add a JavaScript origin that corresponds
// //   to the domain where you will be running the script.
// var clientId = '512890984169-em3b0lqeipdeg38mlmlhoq0vhb9tf1vm.apps.googleusercontent.com';

// // Enter one or more authorization scopes. Refer to the documentation for
// // the API or https://developers.google.com/people/v1/how-tos/authorizing
// // for details.
// var scopes = 'profile';

// var authorizeButton = document.getElementById('authorize-button');
// var signoutButton = document.getElementById('signout-button');

// function handleClientLoad() {
//   // Load the API client and auth2 library
//   gapi.load('client:auth2', initClient);
// }

// function initClient() {
//   gapi.client.init({
//       apiKey: apiKey,
//       discoveryDocs: discoveryDocs,
//       clientId: clientId,
//       scope: scopes
//   }).then(function () {
//     // Listen for sign-in state changes.
//     gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

//     // Handle the initial sign-in state.
//     updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

//     authorizeButton.onclick = handleAuthClick;
//     signoutButton.onclick = handleSignoutClick;
//   });
// }

// function updateSigninStatus(isSignedIn) {
//   if (isSignedIn) {
//     authorizeButton.style.display = 'none';
//     signoutButton.style.display = 'block';
//     makeApiCall();
//   } else {
//     authorizeButton.style.display = 'block';
//     signoutButton.style.display = 'none';
//   }
// }

// function handleAuthClick(event) {
//   gapi.auth2.getAuthInstance().signIn();
// }

// function handleSignoutClick(event) {
//   gapi.auth2.getAuthInstance().signOut();
// }

// // Load the API and make an API call.  Display the results on the screen.
// function makeApiCall() {
//   gapi.client.people.people.get({
//     'resourceName': 'people/me',
//     'requestMask.includeField': 'person.names'
//   }).then(function(resp) {
//     var p = document.createElement('p');
//     var name = resp.result.names[0].givenName;
//     p.appendChild(document.createTextNode('Hello, '+name+'!'));
//     document.getElementById('content').appendChild(p);
//   });
// }

// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
//   }

//   function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       console.log('User signed out.');
//     });
//   }