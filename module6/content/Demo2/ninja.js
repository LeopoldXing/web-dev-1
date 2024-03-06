document.addEventListener("DOMContentLoaded", load);

function load() {
  let container = document.getElementById("main_container");
  container.setAttribute("class", "container");

  let paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].setAttribute("style", "background-color:#FFF");
  }

  let tables = document.getElementsByTagName("table");
  for (let i = 0; i < tables.length; i++) {
    let trs = tables[i].getElementsByTagName("tr");
    for (let j = 0; j < trs.length; j += 2) {
      trs[j].setAttribute("class", "zebra");
    }
  }
}
