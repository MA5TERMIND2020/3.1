
check();

function check() { //Contains the logic that gets the user input and checks to see if it is a Palidrome
var string = ''; //Declare global variables
var acceptedString = '';
var reverseString = '';
var array = [];



while (acceptedString == '') { //Implements a loop to display a prompt for the user to input a string and then manipulates and reverses the string
    string = document.getElementById("word").value
    if (string.match("^[A-Za-z]")) {
        acceptedString = string;
        acceptedString = acceptedString.toLowerCase();
        acceptedString = acceptedString.replace(/ +/g, "");
        array = acceptedString.split('');
        reverseString = array.reverse();
        reverseString = reverseString.join('');
        if (reverseString == acceptedString) {
            document.getElementById("result").innerHTML = `Congratulations, ${string} is a Palindrome! Refresh the page if you would like to try agin.`;
            setTimeout(playAgain, 1000);
        }
        else {
            document.getElementById("result").innerHTML = `Sorry, ${string} is not a Palindrome. Refresh the page if you would like to try agin.`;
            setTimeout(playAgain, 1000);
        }
    }
    else {
        document.getElementById("result").innerHTML = "Error: Invalid Input";
    }
}
}