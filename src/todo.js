// Implementation du dark mode

var mode = document.getElementById("mode");
mode.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        mode.src = "./src/img/dark-option.svg";
    } else {
        mode.src = "./src/img/light-option.svg"
    }
}

// Implementation de la touche "enter" pour valider l'entrée de l'utilisateur

let input = document.getElementById('input');
let parent = document.getElementById('addElement');
let check = document.getElementById('check');
let valeur = this.value;

input.addEventListener("keydown", function (event) {


    if (event.key === "Enter") {
        if (this.value < 5) {
            event.defaultPrevented();
            alert("Enter enough characters");
        } else {
            let enfant = document.createElement("p");
            enfant.textContent = this.value;

            parent.appendChild(enfant);
            this.value = "";
        }
    }

    if (this.value.length >= 4) {
        check.style.backgroundImage = "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)";
        check.disabled = false;
    } else {
        check.disabled = true;
        check.style.backgroundImage = "none";
    }

});
