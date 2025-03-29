// Implementation du dark mode

var mode = document.getElementById("mode");
mode.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        mode.src = "./src/img/dark-option.svg";
    } else {
        mode.src = "./src/img/light-option.svg"
    }
}

// Implementation de la touche "enter" pour valider l'entrée de l'utilisateur

let input = document.getElementById('input');
let parent = document.getElementById('addElement');
input.addEventListener("keydown", function(event) {
    if(event.key === "Enter") { 
        let valeur = this.value;
        let enfant = document.createElement("p");
        enfant.textContent = this.value;
        parent.appendChild(enfant);
        this.value = "";
    }
}) 