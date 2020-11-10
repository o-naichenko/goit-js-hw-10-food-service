import menuCardTpl from "./templates.hbs";
import "./styles.css";
import menuCardsInfo from "./menu.json";

// console.log(menuCardsInfo);

const bodyRef = document.body;
const checkBoxRef = document.getElementById("theme-switch-toggle");
const menuMarkup = menuCardTpl({ menuCardsInfo });
const menuRef = document.querySelector(".js-menu");

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

menuRef.innerHTML = menuMarkup;

document.addEventListener("DOMContentLoaded", onDomContentLoaded);
checkBoxRef.addEventListener("change", onCheckBoxChange);

function onDomContentLoaded() {
  if (localStorage.getItem("activeTheme") === JSON.stringify(Theme.DARK)) {
    switchToDarkTheme();
    checkBoxRef.checked = true;
  }
}
function onCheckBoxChange(e) {
  if (e.target.checked) {
    switchToDarkTheme();
    // localStorage.setItem();
  } else {
    switchToLightTheme();
  }
}
function switchToDarkTheme() {
  bodyRef.classList.add(`${Theme.DARK}`);
  bodyRef.classList.remove(`${Theme.LIGHT}`);
  localStorage.setItem("activeTheme", JSON.stringify(Theme.DARK));
}
function switchToLightTheme() {
  bodyRef.classList.add(`${Theme.LIGHT}`);
  bodyRef.classList.remove(`${Theme.DARK}`);
  localStorage.setItem("activeTheme", JSON.stringify(Theme.LIGHT));
}
