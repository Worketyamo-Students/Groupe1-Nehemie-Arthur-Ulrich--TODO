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

//ADD ELEMENTS

let ul = document.getElementById('addElement')
let input = document.getElementById('input')
let select = document.getElementById('select')

input.addEventListener('input', (e)=>{
    if(input.value.length > 4){
        select.style.background = "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"
        select.innerHTML = '<img src="./src/img/check.svg" alt="" />'

    }
})

input.addEventListener("keydown", (e)=>{

    if(event.key == 'Enter'){

        let test = input.value

        let div = document.createElement('div')
        div.style.cssText = "display: flex; gap: 8px; align-items: center; padding: 16px 20px; border-bottom: 2px solid #E3E4F1;"
        ul.prepend(div)

        let selector = document.createElement('div'); div.appendChild(selector);
        let h2 = document.createElement('h2'); div.appendChild(h2); h2.innerText = test   

        selector.style.cssText = "background-color: #FFFFFF; display: flex; justify-content: center; align-items: center; width: 2rem; height: 2rem; border: 2px solid #E3E4F1; border-radius: 50%;"
        h2.style.cssText = "font-size: 12px"

        input.value = ''
        select.style.background = ""
        select.innerHTML = ''

        if(test.length <= 4){
            alert('Entrez au moins 5 caractères')
            ul.removeChild(div)

        }
    }

}) 