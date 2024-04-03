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

