document.addEventListener("DOMContentLoaded", event => {
  let options = document.getElementsByClassName("__main-menu-item");
  let exitButtons = document.getElementsByClassName("button-icon-container");

  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", display)

    function display() {
      document.querySelector('.mask').style.zIndex = '10';
      console.log("you clicked " + options[i].id);
      if (options[i].id == "pizza") {
        showMenu("pizza-display");
      } else if (options[i].id == "pork") {
        showMenu("pork-display");
      } else if (options[i].id == "chicken") {
        showMenu("chicken-display");
      } else if (options[i].id == "pasta") {
        showMenu("pasta-display");
      } else if (options[i].id == "fish") {
        showMenu("fish-display");
      } else if (options[i].id == "bar") {
        showMenu("bar-display");
      } else if (options[i].id == "snack") {
        showMenu("snacks-display");
      } else if (options[i].id == "salad") {
        showMenu("salad-display");
      } else if (options[i].id == "drink") {
        showMenu("drink-display");
      } else {
        console.log("id error");
      }
    }
    function showMenu(id) {
      document.getElementById(id).style.zIndex = "10";
      document.getElementById(id).style.opacity = "1";
    }
  }
  for (let j = 0; j < exitButtons.length; j++) {
    exitButtons[j].addEventListener("click", exit)

    function exit() {
      console.log("exit");
      let allMenus = document.getElementsByClassName("menu-added");
      allMenus[j].style.zIndex = "-10";
      document.querySelector('.mask').style.zIndex = '-10';
    }
  }



  
});
