/*  using TagName or innerText  & show HTML Collection*/

const title = document.getElementsByTagName("h1");
console.log(title);
for (const tile of title) {
  console.log(tile.innerText)
}

/*  using ClassName or innerHTML*/

const mulsec = document.getElementsByClassName('player-container');
console.log(mulsec);
for (const tilesec of mulsec) {
  console.log(tilesec.innerHTML);
}

/*  using Id*/

// const objectt = document.getElementById("jannat")
// console.log(objectt)

/*  using querySelectorAll that show a nodeList*/

const superr = document.querySelectorAll(".bazar");
console.log(superr);
for (const sup of superr) {
  console.log(sup.innerHTML)
}

/*  using querySelector*/

const najir = document.querySelector(".dom");
console.log(najir);
let dps = document.getElementsByTagName("section");
console.log(dps);
console.log(dps[0]);

/*  change html using javascrip*/

let team = document.getElementsByClassName("player-container");
console.log(team);
console.log(team[0]);
team[0].innerHTML = "<h3>I can change this value</h3>";
const nteam = document.querySelectorAll("section");
console.log(nteam)

/*getAttribute & add or remove attribute value */

// let newvalue = document.getElementById("jannat");
// newvalue.getAttribute("class");
// newvalue.classList.add("item")
// console.log(newvalue);
// newvalue.classList.remove("listitem");
// console.log(newvalue.getAttribute("class"));

/*set css  */

const newClass = document.getElementById("rana");
newClass.classList.add("first-heading");
newClass.style.color = "red";

/*set html using javascript  */

const pragraph = document.createElement("p");
pragraph.innerText = "Jannat from Javascript"
section.appendChild(pragraph);
const section = document.createElement("section");
section.setAttribute('id', "new-section");
const h2 = document.createElement("h2");
h2.innerText = "Amar Sonar Bangla";
const ul = document.createElement("ul");
const list1 = document.createElement("li");
list1.innerText = "first list";
const list2 = document.createElement("li");
list2.innerText = "second list";
ul.appendChild(list1);
ul.appendChild(list2);
section.appendChild(h2);
section.appendChild(ul);

const body = document.getElementById("container");
body.appendChild(section);

const newSection = document.getElementById("new-section");
newSection.firstChild.style.backgroundColor = "red";
newSection.firstChild.style.padding = "20px";