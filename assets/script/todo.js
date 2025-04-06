// Enregistrement du mode
window.addEventListener("DOMContentLoaded", () => {  // "window" représente la fenetre du navigateur;  "DOMContentLoaded" permet d'exécuter le code seulement après le charchement du HTML
    const saveTheme = localStorage.getItem("theme"); // "localStorage" zone de stockage du navigateur ou on peut enregster des données persistentes
    if(saveTheme === "dark") {                       // "getItem" Récupère une valeur enregistrée dans le localStorage.    
        document.classList.add("dark-theme");
        mode.src = "assets/img/dark-option.svg";
    } else {
        document.classList.add("dark-theme");
        mode.src = "assets/img/light-option.svg";
    }
});

// Implementation du dark mode

var mode = document.getElementById("mode");
mode.addEventListener("click", () => {
    // "classList" permet de manipuler les classes CSS d'un élément HTML
    // ".toogle" ajoute la classe si elle n'existe pas, supprime si elle est déjà presente
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        mode.src = "assets/img/dark-option.svg";
        localStorage.setItem("theme", "dark"); // "setItem" enregistre une donnée dans le localStorage
    } else {
        mode.src = "assets/img/light-option.svg";
        localStorage.setItem("theme", "light");
    }
});

// Implementation de la touche "enter" pour valider l'entrée de l'utilisateur

// Récupération des éléments HTML
let input = document.getElementById("input");
let parent = document.getElementById("addElement");
let check = document.getElementById("check");
let element = document.getElementById("element"); // Modèle de l'élément ajouté
let category = document.getElementById("category"); // Appel de la div d'après
let checkImage = document.getElementById("checkImage");
let all1 = document.getElementById('all1');
let active1 = document.getElementById('active1');
let completed1 = document.getElementById('completed1');
let all2 = document.getElementById('all2');
let active2 = document.getElementById('active2');
let completed2 = document.getElementById('completed2');
let clearCompleted = document.getElementById('clearCompleted'); // dé-sélection des éléments
let clearAll = document.getElementById('clearAll'); // bouton pour tous supprimer

// Tableau de compte des éléments
let Tab = []; // cette tableau contient tous les éléments
// Fonction d'affichage du compteur
function counter() {
    let nombreItems = document.getElementById('nombreItems');
    nombreItems.innerHTML = Tab.length + " items left"; // Mise à jour de la fonction counter en fonction de tous les tableaux
}

let all = []; // Tableau des tous les éléments
let active = []; // Tableau des éléments non sélectionnés
let completed = []; // Tableau des éléments séléctionnés

// Cette fonction permet d'afficher un tableau à la fois tout en masquant les autres
function afficherListe(liste) {
    // Masque tous les éléments de la table "Tab"
    Tab.forEach(item => item.style.display = "none");  // "item" représente ici chaque élément qui passe dans la fonction
    // On affiche unique les élément du tableau que l'on souhaite afficher ; les autres sont masqués
    liste.forEach(item => item.style.display = "flex");

    // État initial de couleur si ce n'est pas activé
    let ensemble = [all1, all2, active1, active2, completed1, completed2]; // prend en compte tous les id dont la couleur change à l'état "active"
    ensemble.forEach(element => {
        element.style.color = "var(--select-categories)"
    });

    // Application de la couleur active
    if (liste === all) {
        all1.style.color = "#3A7CFD";
        all2.style.color = "#3A7CFD";
    }
    if (liste === active) {
        active1.style.color = "#3A7CFD";
        active2.style.color = "#3A7CFD";
    }
    if (liste === completed) {
        completed1.style.color = "#3A7CFD";
        completed2.style.color = "#3A7CFD";
    }

    counter(liste); // Mise à jour du compteur pour le tableau actuel
}

// Établit le compteur d'élément
let count = 0; // compteur initialisé à 0
const maxElement = 5; // nombre maximal d'élément que l'utilisateur peut introduire

input.addEventListener("keydown", function (event) {

    // Ajout du background à la div du "check" lorsque le quotta de caractères est atteint
    if (this.value.length < 4) {
        check.style.backgroundImage = "none"; // le background est désactivé
    } else {
        checkImage.style.display = "flex";
        check.style.backgroundImage =
            "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"; // le background est activé
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
            let textElement = newElement.querySelector("#text");

            if (textElement) {
                textElement.textContent = this.value; // affectation de la valeur entrée par l'utilisateur
            }
            parent.appendChild(newElement); // Ajout de l'élément dans le DOM
            // Permet que chaque élément soit positionné avant la div "#category"
            parent.insertBefore(newElement, category);

            // Implémentation du select
            let choose = newElement.querySelector("#choose");
            let selectElement = newElement.querySelector("#selectElement");
            let textColor = getComputedStyle( // "getComputedStyle" permet d'obtenir la valeur calculée de toute les popriétés css d'un élément
                document.documentElement
            ).getPropertyValue("--text-items"); // Récupération de la variable de la couleur du texte
            // "getPropertyValue" retourne la valeur de la variable css (--text-items)

            // Par défaut, les élément entrés sont dans les tableaux "all" et "completed" car ils 
            // ne sont pas encore sélectionnés
            all.push(newElement);
            active.push(newElement);

            choose.addEventListener("click", () => {
                choose.classList.toggle("active");
                if (choose.classList.contains("active")) {
                    choose.style.backgroundImage =
                        "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)";
                    selectElement.style.display = "flex";
                    textElement.style.textDecoration = "line-through"; // Le texte devient barré
                    textElement.style.color = "#9495A5";

                    // Vérifie si le "newElement" n'est pas encore dans le tableau "all" et "active" et l'ajoute. 
                    // Cela permet d'éviter des doublures
                    if (!all.includes(newElement)) all.push(newElement); // Ajout de l'élément dans le tableau "all"
                    if (!completed.includes(newElement)) completed.push(newElement); // Ajout de l'élément dans le tableau "completed"
                    active = active.filter(element => element !== newElement); // suppression de l'élément dans le tableau "active" car l'élément est déjà sélectionné
                    counter(active);
                } else {
                    choose.style.backgroundImage = "none";
                    selectElement.style.display = "none";
                    textElement.style.textDecoration = "none";
                    textElement.style.color = textColor;

                    completed = completed.filter(element => element !== newElement); // Retrait de l'élément dans le tableau "completed"
                    if (!active.includes(newElement)) active.push(newElement); // Ajoute l'élément désélectionné dans le tableau "active"
                    counter(completed); // Mise à jour du compteur
                }
            });

            Tab.push(newElement);  // Ajoute l'élément dans le tableau
            counter(all); // Appel de la fonction d'affichage du compteur

            checkImage.style.display = "none";

            // Implémentation du hover
            let sousElement = newElement.querySelector("#sousElement");
            let exit = document.createElement("img");
            exit.src = "assets/img/exit-option.svg";
            exit.id = "croix";
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
                count--; // Le nombre délément possible à entrer est décrémenté

                // Suppression de l'élément dans le compteur et sur l'affichage
                Tab = Tab.filter(item => item !== newElement);

                // Supression de l'élément dans les différents tableaux
                all = all.filter(element => element !== newElement); // supprression de l'élément dans le tableau "all"
                completed = completed.filter(element => element !== newElement); // suppression de l'élément dans le tableau "completed"
                active = active.filter(element => element !== newElement); // suppresion de l'élément dans le tableau "active"
                counter(active);
            });

            // Efface l'input après validation
            this.value = ""; // permet de vider l'input après chaque entrée
            check.style.backgroundImage = "none";
            parent.style.display = "flex";
            count++; // Incrémentation du compteur à chaque entrée de l'utilisateur

            // "all" activé par défaut
            all1.style.color = "#3A7CFD";
            all2.style.color = "#3A7CFD";
        } else {
            check.style.backgroundImage = "none";
            alert("Enter enough characters");
            check.disabled = true; // Empêche la validation
            checkImage.style.display = "none";
        }
    }
});

// Affichage des listes lors des différents click
all1.addEventListener("click", () => {
    afficherListe(all);
});
all2.addEventListener("click", () => {
    afficherListe(all);
});
completed1.addEventListener("click", () => {
    afficherListe(completed);
});
completed2.addEventListener("click", () => {
    afficherListe(completed);
});
active1.addEventListener("click", () => {
    afficherListe(active);
});
active2.addEventListener("click", () => {
    afficherListe(active);
});

// Implémentation du clear completed
clearAll.addEventListener("click", () => {
    completed.forEach(element => {
        element.remove();
        // suppression de l'élément dans les autres tableaux
        Tab = Tab.filter(item => item !== element);
        all = all.filter(item => item !== element);
        active = active.filter(item => item !== element);
    });
    count = count - completed.length; // Décrémentation du compteur
    completed = []; // Réinitialisation du tableau
    count(all);
});

// Implémentation du clear all
clearAll.addEventListener("click", () => {
    Tab.forEach(element => element.remove()); // supprime tous les éléments
    // Réinitialisation des tableaux
    Tab = []; all = []; active = []; completed = [];
    // Réinitialisation du compteur
    count = 0;
    parent.style.display = "none"; // Retrait du parent
    counter(all);
});

