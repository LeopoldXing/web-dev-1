/********f************

    Do not alter this comment block.
    Only fill out the information below.

    Competency 14
    Name: Luping Xing
    Date: Mar 8, 2024
    Description: Assignment 6, Competency 14 - Manipulating Elements

*********************/

document.addEventListener("DOMContentLoaded", load);

/*
    Load function
    Create, insert, and delete elements
*/
function load() {
  let loremIpsum = "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, arcu at feugiat loborti."
  let paragraphTag = document.createElement("p")
  paragraphTag.innerHTML = loremIpsum;
  let result = document.getElementById("results")
  result.appendChild(paragraphTag)

  let h2 = document.createElement("h2")
  h2.innerHTML = "lorem Texts";
  paragraphTag.parentNode.insertBefore(h2, paragraphTag);

  document.getElementsByTagName("footer")[0].remove()
}




