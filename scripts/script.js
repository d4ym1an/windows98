let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Howdy, ${myName}!`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Howdy, ${storedName}!`;
}

myButton.addEventListener("click", () => {
    setUserName();
});

function setUserName() {
    const myName = prompt("Please enter your name.");
if (!myName){
    setUserName();
} else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Howdy, ${myName}!`;
}
}