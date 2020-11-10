import template from "./templates.hbs";
import "./styles.css";

const checkBoxRef = document.getElementById("theme-switch-toggle");
const bodyRef = document.body;
console.log(bodyRef);

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

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
