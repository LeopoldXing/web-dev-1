/*
	Pass/Fail Demonstration
	March 3, 2023
	Alan Simpson
*/

const load = () => {

  // load data from local storage
  if(localStorage.getItem("marksData")) {
    document.getElementById("list").innerHTML = localStorage.getItem("marksData");
    document.getElementById("clearbutton").style.display = "block";
  }

  //	Event listeners for the buttons
  let submit = document.getElementById("submit");
  submit.addEventListener("click", checkData);

  let clear = document.getElementById("clearbutton");
  clear.addEventListener("click", clearButton);
}

const checkData = () => {
  //	Validate the data
  //	Retrieve the data from the DOM
  // get data
  const name = document.getElementById("name").value;
  let mark = document.getElementById("mark").value;

  // parsing and validating
  mark = parseFloat(mark);
  if (name && !isNaN(mark)) {
    displayData(name, mark);
  }

  // reset forms input
  resetFields();
}

const displayData = (name, mark) => {
  //	Declare variables
  let passfail = "pass";
  if (mark < 50) {
    passfail = "fail";
  }
  const newTr = document.createElement("tr");
  const newNameTd = document.createElement("td");
  const newMarkTd = document.createElement("td");
  const newPFTd = document.createElement("td");

  newNameTd.innerHTML = name;
  newMarkTd.innerHTML = mark;
  newPFTd.innerHTML = passfail;

  newTr.appendChild(newNameTd);
  newTr.appendChild(newMarkTd);
  newTr.appendChild(newPFTd);

  document.getElementById("clearbutton").style.display = "block";
  document.getElementById("list").appendChild(newTr);
  saveData();
}

//	Clears the data in the form and hides the clear button
const clearButton = () => {
  let tbody = document.getElementById("list");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  clearbutton.style.display = "none";
  resetFields();

}

//	Resets the form's inputs
const resetFields = () => {
  document.getElementById("name").value = "";
  document.getElementById("mark").value = "";
  document.getElementById("name").focus();
  saveData();
}

document.addEventListener("DOMContentLoaded", load);

function saveData() {
  localStorage.setItem("marksData", document.getElementById("list").innerHTML);
}
