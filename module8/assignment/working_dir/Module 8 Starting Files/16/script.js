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

    fetch("https://dog.ceo/api/breeds/list/all")
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
  let ol = document.createElement("ol");
  let bullDogLabel = document.createElement("span");
  bullDogLabel.innerText = "Bull Dog: ";
  let bullDogList = data.message.bulldog;
  for(let i = 0; i < bullDogList.length; i++) {
    let li = document.createElement("li");
    li.innerText = bullDogList[i];
    ol.appendChild(li);
  }

  div.appendChild(bullDogLabel);
  div.appendChild(ol);

  mainElement.appendChild(div);
}

//adds an event listener to execute onLoad method when page finished loading
document.addEventListener("DOMContentLoaded", load);
