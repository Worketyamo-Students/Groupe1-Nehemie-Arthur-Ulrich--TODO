// Implementation du dark mode

var mode = document.getElementById("mode");
mode.onclick = function () {
    // "classList" permet de manipuler les classes CSS d'un élément HTML 
    // ".toogle" ajoute la classe si elle n'existe pas, supprime si elle est déjà presente
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        mode.src = "assets/img/dark-option.svg";
    } else {
        mode.src = "assets/img/light-option.svg"
    }
}

// Implementation de la touche "enter" pour valider l'entrée de l'utilisateur

// Récupération des éléments HTML
let input = document.getElementById('input');
let parent = document.getElementById('addElement');
let check = document.getElementById('check');
let element = document.getElementById('element'); // Modèle de l'élément ajouté
let category = document.getElementById('category'); // Appel de la div d'après
let checkImage = document.getElementById('checkImage');

// Établit le compteur d'élément
let count = 0; // compteur initialisé à 0
const maxElement = 5; // nombre maximal d'élément que l'utilisateur peut introduire

input.addEventListener("keydown", function (event) {

    // Ajout du background à la div du "check" lorsque le quotta de caractères est atteint 

    if (this.value.length < 4) {
        check.style.backgroundImage = "none"; // le background est désactivé  
    } else {
        checkImage.style.display = "flex";
        check.style.backgroundImage = "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"; // le background est activé
    }

    // Ajoute la valeur de l'utilisateur

    if (event.key === "Enter") {
        let valeur = this.value; // affectation de l'entré de l'utilisateur à "valeur"

        // Condition d'arret si le nombre d'éléments entré est égal à 5
        if (count >= maxElement) {
            alert("You can only add 5 items.");
            checkImage.style.display = "none";
            check.style.backgroundImage = "none";
            return; // Le "return" empeche l'execution du reste du code si la condition est vérifiée
        }

        // Vérifie si la longueur est suffisante
        if (this.value.length >= 5) {

            // clonage de l'élément à chaque entrée de l'utilisateur
            let newElement = element.cloneNode(true); // ".cloneNode(true)" permet de cloner l'element en question ainsi que ses enfants
            newElement.style.display = "flex"; // permet l'affichage de l'élément
            let textElement = newElement.querySelector('#text');

            if (textElement) {
                textElement.textContent = this.value;
            }
            parent.appendChild(newElement); // Ajout de l'élément dans le DOM

            // Permet que chaque élément soit positionné avant la div "#category"
            parent.insertBefore(newElement, category);
            checkImage.style.display = "none";


            // Implémentation de hover
            let sousElement = newElement.querySelector("#sousElement");
            let exit = document.createElement("img");
            exit.src = "assets/img/exit-option.svg"
            exit.id = "croix"
            exit.classList.add("cursor-pointer");
            newElement.addEventListener("mouseover", () => {
                sousElement.appendChild(exit);
            });

            // La croix disparait lorsque la souris est retirer de la section
            newElement.addEventListener("mouseleave", () => {
                let exit = newElement.querySelector("#croix");
                exit.remove();
            });

            // Suppression de l'élément
            exit.addEventListener("click", () => {
                newElement.remove();
                count--;
            });

            let choose = document.getElementById("choose");
            console.log(choose);

            // Efface l'input après validation
            this.value = ""; // permet de vider l'input après chaque entrée
            check.style.backgroundImage = "none";
            parent.style.display = "flex";
            count++; // Incrémentation du compteur à chaque entrée de l'utilisateur
        } else {
            check.style.backgroundImage = "none";
            alert("Enter enough characters");
            check.disabled = true; // Empêche la validation
            checkImage.style.display = "none";
        }
    }
});