/********f************

 Do not alter this comment block.
 Only fill out the information below.

 Competency 16
 Name: Luping Xing
 Date: Apr 2, 2024
 Description: script file of Module 8 competency 16

 *********************/


/*
    Load function
    Using the fetch API, get your chosen dataset from the Dog API

 */
function load() {

  fetch("https://dog.ceo/api/breed/hound/list")
    .then(result => {
      return result.json();
    })
    .then(data => {
      createHTML(data);
    });

}

/*
    createHTML function
    Using your chosen Dog dataset, create at least 2 HTML elements
    and add them to the provided HTML
*/
function createHTML(data) {
  let mainElement = document.getElementById("wrapper");

  let div = document.createElement("div");

  let message = data.message;
  let keys = Object.keys(message);
  let values = Object.values(message);

  for (let i = 0; i < keys.length; i++) {
    let currentBreed = values[i];

    if (Array.isArray(currentBreed) && currentBreed.length > 0) {
      let ol = document.createElement("ol");
      let label = document.createElement("span");
      label.innerText = keys[i] + ": ";

      for (let j = 0; j < currentBreed.length; j++) {
        let li = document.createElement("li");
        li.innerText = currentBreed[j];
        ol.appendChild(li);
      }

      div.appendChild(label);
      div.appendChild(ol);
      if (i !== keys.length - 1) {
        div.appendChild(document.createElement("hr"));
      }
    }
  }

  mainElement.appendChild(div);
}

//adds an event listener to execute onLoad method when page finished loading
document.addEventListener("DOMContentLoaded", load);

//adds an event listener to execute onLoad method when page finished loading
document.addEventListener("DOMContentLoaded", load);
