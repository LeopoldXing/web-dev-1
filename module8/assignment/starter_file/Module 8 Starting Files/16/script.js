/********f************

    Do not alter this comment block. 
    Only fill out the information below.

    Competency 16
    Name: 
    Date:
    Description:

*********************/


/*
    Load function
    Using the fetch API, get your chosen dataset from the Dog API

 */
function load() {

    fetch(/* put your chosen URL here */)
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

}

//adds an event listener to execute onLoad method when page finished loading
document.addEventListener("DOMContentLoaded", load);