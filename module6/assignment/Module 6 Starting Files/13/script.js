/********f************

 Do not alter this comment block.
 Only fill out the information below.

 Competency 13 Event Listeners
 Name: Luping Xing
 Date: Mar 8, 2024
 Description: Assignment 6, Competency 13 - Event Listeners

 *********************/


//    Task 1: Event listener to trigger the load function upon DOM loading
document.addEventListener("DOMContentLoaded", load)

/*
Task 2
Load function
Event listeners to setup the page will go here
*/
function load() {
  let clickButton = document.getElementsByTagName("button")[0]
  clickButton.addEventListener("click", clickMe)

}

/*
Task 3
Click Function
This will change the display value of the input
*/

function clickMe()
{
  let popUpElement = document.getElementById("popup")

  if(popUpElement.style.display == "block") {
    popUpElement.style.display = "none";
  }

  else{
    popUpElement.style.display = "block";
  }
}
