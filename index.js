/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let timeNumber = parseInt(time.split(':')[0]);
  if (timeNumber < 12){
    return 'Good Morning';
  } else if (timeNumber < 17){
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message = 'TEST') {
const h1Greeting = document.getElementById('greeting');
h1Greeting.innerText = message;
}
