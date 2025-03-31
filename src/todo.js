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
