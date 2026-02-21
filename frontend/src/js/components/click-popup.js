let array = ["title", "settings-account", "saved-messages", "more", "close"];

const popup = document.getElementById("popup-container");
popup.style.display = "none";

for (let item in array) {
  let newDiv = document.createElement("div");
  newDiv.className = item;
}
