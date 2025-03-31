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

// Récupération des éléments HTML
let input = document.getElementById('input');
let parent = document.getElementById('addElement');
let check = document.getElementById('check');
let element = document.getElementById('element'); // Modèle de l'élément ajouté

// Établit le compteur d'élément
let count = 0;
const maxElement = 5;

input.addEventListener("keydown", function (event) {

    // Ajout du background à la div du "check" lorsque le quotta de caractères est atteint 

    if (this.value.length < 4) {
        check.style.backgroundImage = "none"; // le background est désactivé  
    } else {
        check.style.backgroundImage = "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"; // le background est activé
    }

    // Ajoute la valeur de l'utilisateur



    if (event.key === "Enter") {
        let valeur = this.value;

        if(count >= maxElement){
            alert("You can only add 5 items.");
            return;
        }

        // Vérifie si la longueur est suffisante
        if (this.value.length >= 5) {

            // clonage de l'élément à chaque entrée de l'utilisateur
            let newElement = element.cloneNode(true);
            newElement.style.display = "flex"; // permet l'affichage de l'élément
            let textElement = newElement.querySelector('#text');
            if (textElement) {
                textElement.textContent = this.value;
            }

            parent.appendChild(newElement);

            // Efface l'input après validation
            this.value = "";
            check.style.backgroundImage = "none";
            count++;
        } else {
            check.style.backgroundImage = "none";
            alert("Enter enough characters");
            check.disabled = true; // Empêche la validation
        }
    }
});