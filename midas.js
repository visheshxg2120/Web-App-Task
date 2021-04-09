function onSignIn(googleUser){
    console.log('User is' + JSON.stringify(googleUser.getBasicProfile()));
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }