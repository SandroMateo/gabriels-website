function signUpCheck(_email, _password) {
  if(_password.length < 6) {
    console.log('hello');
    $('#email').val('');
    $('#password').val('');
  } else {
    console.log(_email, _password);
    firebase.auth().createUserWithEmailAndPassword(_email, _password).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
    })
  }
}

$(document).ready(function() {

  $('#create').submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();
    signUpCheck(email, password);
  })
});
