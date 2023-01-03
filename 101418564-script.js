// This is the first question, the Welcome message
alert("Hello there, Welcome to my third assignment. I have had an incredible time learning web "
    + "development this semester, and look forward to continuing to do so. JavaScript has been"
    + " my favourite thing thus far. I hope you enjoy my project!");

// This is the second question, the prompt for a users first name.
let userInputOne;
let answerOne = false;

while (answerOne === false) {
    userInputOne = prompt('Enter your first name: ', 'Agent');
    if (!userInputOne || userInputOne.length === 0 || !isNaN(Number(userInputOne))) {
        alert("Please enter a first name!")
    } else if (userInputOne.length > 0) {
        console.log('Your first name is: ' + (userInputOne));
        answerOne = true;
    }
}


// This is the third question, the prompt for a users last name

let userInputTwo;
let answerTwo = false;

while (answerTwo === false) {
    userInputTwo = prompt('Please enter your last name: ', 'Smith');
    if (!userInputTwo || userInputTwo.length === 0 || !isNaN(Number(userInputTwo))) {
        alert("Please enter a last name!")
    } else if (userInputTwo.length > 0) {
        console.log('Your last name is: ' + (userInputTwo));
        answerTwo = true;
    }
}

// Here is both names logged as requested, they were done separately on purpose.
console.log('Your full name is: ' + (userInputOne) + " " + (userInputTwo));


// This is the fourth question, the prompt for a users program of study
let userInputThree;
let answerThree = false;

while (answerThree === false) {
    userInputThree = prompt('Please enter your program name:', 'Computer Systems Analyst')
     if (userInputThree && userInputThree.length === 0 || !isNaN(Number(userInputThree))) {
        userInputThree = "Computer Systems Analyst"
        console.log(' Your program is: ' + (userInputThree));
        answerThree = true;
    }
    else if (userInputThree.length > 0) {
        console.log(' Your program is: ' + (userInputThree));
        answerThree = true;
    }
}



// This is the fifth question, the years of study prompt
let userInputFour;
let answerFour = false;

while (answerFour === false) {
    userInputFour = prompt('Please enter your year of study:', '1')
    if (userInputFour.length < 1) {
        userInputFour = 1
        console.log('Year of study: ' + (userInputFour));
        answerFour = true;
    }
    else if ( userInputFour > 3 ) {
        alert("Invalid amount of time!")
    }
    else if (userInputFour >= 1 && userInputFour <=3) {
        console.log('Year of study: ' + (userInputFour));
        answerFour = true;
    }
}



// This is where all the prompts come to fruition and are used, the sixth question.

let full_name = document.getElementById("full_name");
full_name.innerHTML = ("Your full name is: " + (userInputOne)) + " " + ((userInputTwo));

let program_of_study = document.getElementById("program_of_study");
program_of_study.innerHTML = ("Your program is: " + (userInputThree));

let year_of_study = document.getElementById("year_of_study");
year_of_study.innerHTML = ("Years in study: " + (userInputFour));

//I hope you like the way I code! This project was a lot of fun.
//Andrew Stewart, 101418564