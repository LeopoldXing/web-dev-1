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
  let loremString = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, culpa dolorem dolorum enim exercitationem explicabo impedit magni maxime minima neque tempore vel voluptatibus. Architecto exercitationem explicabo laborum possimus voluptatem?";
  let p = document.createElement("p");
  p.innerHTML = loremString;
  document.getElementById("results").appendChild(p);

  let h2 = document.createElement("h2");
  h2.innerHTML = "Some lorem texts";
  p.parentNode.insertBefore(h2, p);

  document.getElementsByTagName("footer")[0].remove();
}




