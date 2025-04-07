// Implementation du dark mode
 
var mode = document.getElementById("mode");
mode.onclick = function () {
    // "classList" permet de manipuler les classes CSS d'un élément HTML 
    // ".toogle" ajoute la classe si elle n'existe pas, supprime si elle est déjà presente
    document.body.classList.toggle("dark-theme"); 
    if (document.body.classList.contains("dark-theme")) {
        mode.src = "./assets/img/dark-option.svg";
    } else {
        mode.src = "./assets/img/light-option.svg";
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
let all1 = document.getElementById("all1"); 
let all2 = document.getElementById("all2");
let activate1 = document.getElementById("activate1"); 
let activate2 = document.getElementById("activate2");
let completed1 = document.getElementById("completed1"); 
let completed2 = document.getElementById("completed2");
let clear = document.getElementById("clear");

let all = []; //TABLEAU ALL
let activate = []; //TABLEAU ACTIVE
let completed = []; //TABLEAU COMPLETED

// Établit le compteur d'élément
let count = 0; // compteur initialisé à 0
const maxElement = 5; // nombre maximal d'élément que l'utilisateur peut introduire

input.addEventListener("keydown", function (event) {

    // Ajout du background à la div du "check" lorsque le quotta de caractères est atteint 

    if (this.value.length < 4) {
        check.style.backgroundImage = "none"; // le background est désactivé  
        checkImage.style.display = "none"; //----off du checkImage
    } else {
        checkImage.style.display = "flex"; // Affiche l'image check
        check.style.backgroundImage = "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"; // le background est activé
    }

    // Ajoute la valeur de l'utilisateur

    if (event.key === "Enter") {
        let valeur = this.value; // affectation de l'entré de l'utilisateur à "valeur"

        // Condition d'arret si le nombre d'éléments entré est égal à 5
        if (all.length >= 5) {
            alert("You can only add 5 items.");
            return; // Le "return" empeche l'execution du reste du code si la condition est vérifiée
        }

        // Vérifie si la longueur est suffisante
        if (this.value.length >= 5) {

            parent.style.display = 'flex';
            category.style.display = 'flex';
            // clonage de l'élément à chaque entrée de l'utilisateur
            let newElement = element.cloneNode(true); // ".cloneNode(true)" permet de cloner l'element en question ainsi que ses enfants
            newElement.style.display = "flex"; // permet l'affichage de l'élément
            checkImage.style.display = "flex";
            let textElement = newElement.querySelector('#text');

            let newAll = all.push(newElement) //TABLEAU D'ELEMENTS
            let nombreEl = document.getElementById("nombreEl");

            if (textElement) {
                textElement.textContent = this.value;
            }
            parent.appendChild(newElement); // Ajout de l'élément dans le DOM

            // Permet que chaque élément soit positionné avant la div "#category"
            // parent.insertBefore(newElement, category);

            //Ajout de l'icone Delete au Hover de la souris
            let se = newElement.querySelector("#sousElement");

            let select = se.querySelector("#select");
            let checkI = se.querySelector("#checkImage2"); //Evenement click du check

            let supp = document.createElement("img")
            supp.src = "assets/img/exit-option.svg"; 
            supp.classList = "cursor-pointer";

            newElement.addEventListener('mouseover', () => {
                se.appendChild(supp);

                //Suppression au click
                supp.addEventListener('click', () =>{
                    parent.removeChild(newElement);
                    all = all.filter(all => all !== newElement);
                    nombreEl.innerHTML = all.length + " items left";

                    completed = completed.filter(completed => completed !== newElement);
                    activate = activate.filter(activate => activate !== newElement);
                    count--;

                }) ;
            });
            //Retrait de l'icone delete quand on quitte le hover
            newElement.addEventListener('mouseleave', () => {
                se.removeChild(supp);
            });

            // Evenement click de Select 
            let active = true; //Sert a verifier et initialiser l'etat

            select.addEventListener('click', () => {
                if(active){
                    select.style.background = "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"
                    checkI.style.display = "flex";
                    textElement.style.textDecoration = "line-through";
                    textElement.style.color = "#9495A5";

                    let newcompleted = completed.push(newElement); //ADD ELMT TO COMPLETED
                    activate = all.filter(e => !completed.includes(e));

                    clear.addEventListener('click', () => { //DELETE WHEN WE CLICK ON CLEAR
                        parent.removeChild(newElement);
                        // all = all.filter(all => all !== newElement)
                        all = activate;

                        nombreEl.innerHTML = all.length + " items left";
                        completed = completed.filter(completed => completed !== newElement);
                    }) ;                    


                } else{ //SI LE CLICK N'EST PAS ACTIF
                    select.style.background = "";
                    checkI.style.display = "";
                    textElement.style.textDecoration = "";
                    textElement.style.color = "";

                    completed = completed.filter(completed => completed !== newElement);

                    activate = all.filter(e => !completed.includes(e));

                    clear.addEventListener('click', () => {

                    });
                }
                active = !active

                completed1.addEventListener('click', () => { //evenement click du Active
                    parent.innerHTML = "";
                    all1.style.color = "var(--select-categories)"; all2.style.color = "var(--select-categories)"; activate1.style.color = "var(--select-categories)"; activate2.style.color = "var(--select-categories)", completed1.style.color = "#3A7CFD"; completed2.style.color = "#3A7CFD";
                    for(let i=0; i<completed.length; i++){
                        parent.appendChild(completed[i])
                    }
                });
                completed2.addEventListener('click', () => { //evenement click du Active
                    parent.innerHTML = "";
                    all1.style.color = "var(--select-categories)"; all2.style.color = "var(--select-categories)"; activate1.style.color = "var(--select-categories)"; activate2.style.color = "var(--select-categories)", completed1.style.color = "#3A7CFD"; completed2.style.color = "#3A7CFD";
                    for(let i=0; i<completed.length; i++){
                        parent.appendChild(completed[i])
                    }
                });
                activate1.addEventListener('click', () => {
                    parent.innerHTML = "";
                    all1.style.color = "var(--select-categories)"; all2.style.color = "var(--select-categories)"; activate1.style.color = "#3A7CFD"; activate2.style.color = "#3A7CFD", completed1.style.color = "var(--select-categories)"; completed2.style.color = "var(--select-categories)";
                    for(let i=0; i < activate.length; i++)(
                        parent.appendChild(activate[i])
                    )
                });
                activate2.addEventListener('click', () => {
                    parent.innerHTML = "";
                    all1.style.color = "var(--select-categories)"; all2.style.color = "var(--select-categories)"; activate1.style.color = "#3A7CFD"; activate2.style.color = "#3A7CFD", completed1.style.color = "var(--select-categories)"; completed2.style.color = "var(--select-categories)";
                    for(let i=0; i < activate.length; i++)(
                        parent.appendChild(activate[i])
                    )
                });
            });

            all1.addEventListener('click', () => {
                parent.innerHTML = "";
                 all1.style.color = "#3A7CFD"; all2.style.color = "#3A7CFD"; activate1.style.color = "var(--select-categories)"; activate2.style.color = "var(--select-categories)", completed1.style.color = "var(--select-categories)"; completed2.style.color = "var(--select-categories)";
                for(let i=0; i<all.length; i++){
                    parent.appendChild(all[i])
                }
            });
            all2.addEventListener('click', () => {
                parent.innerHTML = "";
                all1.style.color = "#3A7CFD"; all2.style.color = "#3A7CFD"; activate1.style.color = "var(--select-categories)"; activate2.style.color = "var(--select-categories)", completed1.style.color = "var(--select-categories)"; completed2.style.color = "var(--select-categories)";
                for(let i=0; i<all.length; i++){
                    parent.appendChild(all[i])
                }
            });

            nombreEl.innerHTML = all.length + " items left"; //Decompte d'elements entrés    

            //Efface l'input après validation
            input.value = ""; // permet de vider l'input après chaque entrée
            check.style.backgroundImage = "none";
            checkImage.style.display = "none";
            count++; // Incrémentation du compteur à chaque entrée de l'utilisateur

        } else {
            check.style.backgroundImage = "none";
            checkImage.style.display = "none";
            alert("Enter enough characters");
            check.disabled = true; // Empêche la validation
        }
    }
});