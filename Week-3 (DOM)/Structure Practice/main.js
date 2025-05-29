let spanEle = document.createElement("span");
spanEle.innerText = "Span!";

let buttonEle = document.createElement("button");
buttonEle.innerText = "Button!!";

let divEle = document.createElement("div");
divEle.style.backgroundColor = "yellow";

document.body.append(divEle);
divEle.append(spanEle, buttonEle);