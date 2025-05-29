// Q1
document.querySelector("h1").append("Robinn");

// Q2
let boxes = document.querySelectorAll(".box");
for(let i = 0; i < boxes.length; i++){
    boxes[i].innerText = `UNIQUE ${i+1}`;
}

// Updating attributes using DOM:-
console.log(boxes[0].setAttribute("class", "box-1"));

// Updating CSS:-
boxes[0].style.fontStyle = "italic";

// Creating Element:-
let newButton = document.createElement("button");   // Create Element
newButton.innerText = "Hey Robinn! Welcome...";
document.body.append(newButton);

newButton.style.margin = "1rem 2rem";
newButton.style.padding = "0.5rem 1.5rem";