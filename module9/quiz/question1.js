myData = [
  {
    "name": "Sara Grayies",
    "city": "Toronto"
  }
]

const showName = () => {
  console.log(myData[0].name + " lives in " + myData[0].city);
}

const question5 = () => {
  console.log(Object.keys(myData)[1]);

}

document.addEventListener("DOMContentLoaded", question5);
