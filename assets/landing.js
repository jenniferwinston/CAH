$( document ).ready(function() {
	console.log("here");
	$("#registerForm").hide();

$("#registerButton").on("click", function() {
	console.log("kissoff");
	$("#registerForm").show();
});
});

//Kev... do this: npm install bcrypt.  Here's the code once you get the database started.
var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB. 
    });
});

// Load hash from your password DB. 
bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
    // res == true 
});
bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
    // res == false 
});