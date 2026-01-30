const welcomeText = document.getElementById("welcome-text");
const setNameBtn = document.getElementById("set-name-btn");

let storedName = localStorage.getItem("name");

if (storedName) {
  welcomeText.innerText = `Hi, ${storedName}. Welcome to Our Website`;
}

setNameBtn.addEventListener("click", () => {
  let name = prompt("What's your name?");
  if (name && name.trim() !== "") {
    localStorage.setItem("name", name);
    welcomeText.innerText = `Hi, ${name}. Welcome to Our Website`;
  }
});
