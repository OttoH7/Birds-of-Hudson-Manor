///Otto Hilstrom/////////////////////
///IFT 301///Birds of Hudson Manor///
///Final Project/////////////////////
/////////////////////////////////////

///inspiration for code below found at https://daily-dev-tips.com/posts/vanilla-javascript-time-of-day-greeting/ ///

//encapsulating this routine in a function referenced in body tag on index.html//
function timeGreeting() {
    //set id to put in html tag
    var greeting = document.getElementById("greeting");
    // variable for the current hour
    var hour = new Date().getHours();
    var greetingArray = ["Good Morning", "Good Afternoon", "Good Evening"];
    //empty variable below will be one of three array elements above. To be determined by conditional statement.
    var text;

    //conditional statements to determine which greeting to use based on the time.
    if (hour < 12) text = greetingArray[0];
    else if (hour < 18) text = greetingArray[1];
    else text = greetingArray[2];

    //text variable now has a value and is linked to the greeting id in HTML
    greeting.innerHTML = text;
}
///This concludes one section of code for controlling the greeting on the index.html page.///

///For image gallery on "Submissions" page.  I followed a tutorial url: https://www.youtube.com/watch?v=sHG3Sf6XN9g" /////

//declaring function.  See img tags in html.  onclick=function below.//
function displayContent(img) {
    //declaring variables

    var box;
    var boxContent;
    //linking variables to elements

    box = document.getElementById("box");
    boxContent = document.getElementById("content");
    box.style.display = "flex"; //alters from "none" property in css.
    boxContent.src = img;
}

function closeBox() {
    var box = document.getElementById("box");
    box.style.display = "none";
}
///I believe I have to have this validation routine encapsulated in a single function.  Since the event listener has to be outside of the validate function, I nested the routine in another function///
function input() {
    function validate(e) {
        //declaring function with event parameter

        //declaring all variables//

        var firstName;
        var lastName;
        var zip;
        let button = document.getElementById("button"); //declare button variable and reference it to html tag

        //referencing variables to html tags
        firstName = document.getElementById("first_name");
        lastName = document.getElementById("last_name");
        zip = document.getElementById("zip");
        let mail = document.getElementById("e");

        //////////three conditions which, if not met, will alert the user//////
        if (firstName.value.length < 3) {
            alert("Isn't you first name at least three letters long?");
            e.preventDefault(); //this prevents the browser from going off the page if condition is not met
        }
        if (lastName.value.length < 3) {
            alert("Isn't you last name at least three letters long?");
            e.preventDefault();
        }
        if (zip.value != 85281) {
            alert("That is not the correct Zip Code for Hudson Manor.");
            e.preventDefault();
        }
        if (!mail.value.includes("@")) {
            alert('Your email address must include an "@" character');
            e.preventDefault();
        }
    }
    //event listener added to button variable.  Will fire when button is clicked and activate the validate function//
    button.addEventListener("click", validate);
}
///end of code for validation///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
