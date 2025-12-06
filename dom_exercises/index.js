const container = document.querySelector("#container");

// a <p> with red text that says “Hey I’m red!”
const pElement = document.createElement("p");
pElement.classList.add("pElement");
pElement.setAttribute("style", "color:red");
pElement.textContent = "Hey I'm red!";

// an <h3> with blue text that says “I’m a blue h3!”

const h3Element = document.createElement("h3");
h3Element.classList.add("h3Element");
h3Element.setAttribute("style", "color: blue");
h3Element.textContent = "I'm a blue h3!";

// a <div> with a black border and pink background color with the following elements inside of it:

//      another <h1> that says “I’m in a div”

//      a <p> that says “ME TOO!”

// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const borderedDiv = document.createElement("div");
borderedDiv.classList.add("borderedDiv");
borderedDiv.setAttribute("style", "background: pink; border: 2px solid black;");

const h1Element = document.createElement("h1");
h1Element.classList.add("h1Element");
h1Element.textContent = "I'm in a div";

const p2Element = document.createElement("p");
p2Element.classList.add("p2Element");
p2Element.textContent = "ME TOO!";

borderedDiv.appendChild(h1Element);
borderedDiv.appendChild(p2Element);

const btn = document.createElement("button");
btn.classList.add("btn");
btn.textContent = "Click!";

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

container.appendChild(pElement);
container.appendChild(h3Element);
container.appendChild(borderedDiv);
container.appendChild(btn);