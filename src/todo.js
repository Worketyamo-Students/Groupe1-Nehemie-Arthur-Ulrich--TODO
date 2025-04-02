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
// 
// let ul = doocument.getElementById("addElement")
// let input = document.getElementById("input")
// let select = document.getElementById("seect")

// input.addEventListener("input",(e)=>{
//     if(input.ariaValueMax.length > 4){
//         select.stylebackgraound = "linear gradian(135deg,rgb(182, 228, 240) 0%, #C058f3 100%)"
//         select.innerHTML = '<img src="./src/img/check.svg" alt="" />'
//     }
// })

// const all = []

// input.addEventListener("keydown", (e)=>{
//     if(event.key == 'enter'){
//         let test = input.value 
//         let div = document.createElement('div')
//         div.style.cssText="display: flex; gap:8px; align items; center; padding: 12px 20px; border-bottom:2px solid #E3E4F1;"
//         ul.appendchild(div)

//         let selector = document.createElement("div");
//         div.appendChild(selector)
//         let h2 = document.createElement("h2")
//         div.appendChild(h2)
//         h2.innerText= test

//         selector.style.cssText = "backgroundColor: #FFFFFF; display: flex; justify-content: center; width: 2rem; heigth: 2rem; border: 2px solid #E3E4F1; border raduis: 50%"
//         h2.style.cssText = "font-size: 12px"

//         let All = all.push(div)
//         // console.log(all)

//         if(all.length > 6){
//             alert("liste pleine;supprimer pour ajouter")
//             ul.removeChild(div)
//             all.splice(6, 1)
//         }
//         input.value = ""
//         select.style.background = ""
//         select.innerHTML = ""

//         if(test.length <= 4){
//             alert("entrer au moins 5 caracteres")
//             ul.removeChild(div)
//             all.pop()
//         }
//     }
// })


//
let input = document.getElementById('input') 
let parent = document.getElementById('parent') 
let check = document.getElementById('check') 
let element = document.getElementById('element') 
let category = document.getElementById('category') 
let checkImage = document.getElementById('checkImage')



let count = 0;
const maxElement = 5;

input.addEventlistener("keydown", function(event){

    if(this.value.length < 4){
        check.style.backgroundImage = "none"
    }else{
        checkImage.style.display = "flex";
        check.style.backgroundImage = "linear-gradient(135deg,rgb(182, 228, 240) 0%, #C058f3 100%)"
    }

    if(event.key == "enter"){
        let value = this.value;

        if(count >= maxElement){
            alert("selement 5 caracteres peuvent etre entrer");
            return;
        }

        if(this.value.length  >=5) {
             
            let newElement = element.cloneNode(true);
            newElement.style.display = "flex";
            let textElement = newElement.querySelector('#text');

            if(textElement){
                textElement.textContent = this.value;

            }
            parent.appendChild(newElement);

            parent.insertBefore(newElement,category);


            this.value = "";
            check.style.backgroundImage = "none";
            count++;
        }else{
            check.style.backgroundImage = "none";
            alert("enter enough characters");
            check.disabled = true;
        }
    }
})

