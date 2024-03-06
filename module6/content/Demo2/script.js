const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

console.log(days);
console.log(days[0]);
console.log(days[4]);

let section = document.getElementsByTagName("section")[0];
console.log(section);

section.innerHTML += "hello";

let div = document.getElementById("home");
for (let i = 0; i < days.length; i++) {
  div.innerHTML += `<p>${days[i]}</p>`;
}
