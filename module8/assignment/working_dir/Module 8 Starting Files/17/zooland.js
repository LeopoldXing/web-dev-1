/********f************

    Do not alter this comment block.
    Only fill out the information below.

    Competency 17
    Name: Luping Xing
    Date: Apr 2, 2024
    Description: zooland js file of module 8 assignment competency 17

*********************/

//adds an event listener to execute onLoad method when page finished loading
document.addEventListener("DOMContentLoaded", load);

/*
    createZooland function
    This function will retrieve the data for the animal you created specifically
    You will then add the code required to meet the specifications
 */
function createZooland(zoolandData) {
  let contentDiv = document.getElementById("content");

  let h2 = document.createElement("h2");
  let h3 = document.createElement("h3");
  let blockquote = document.createElement("blockquote");

  let elephantData = zoolandData[0];

  h2.innerText = elephantData.common_name;
  h3.innerText = elephantData.scientific_name;
  blockquote.innerText = elephantData.description;

  contentDiv.appendChild(h2);
  contentDiv.appendChild(h3);
  contentDiv.appendChild(blockquote);

  let imageList = elephantData.images.image;
  for(let i = 0; i < imageList.length; i++) {
    let img = document.createElement("img");
    img.src = `images/${imageList[i]}`;
    contentDiv.appendChild(img);
  }
}

/*
    load function
        loading the json file - run when the page loads
 */
function load() {
    fetch('zooland.json')
        .then(result => {
            return result.json()
        })
        .then(data => {
            createZooland(data);
        });
}

