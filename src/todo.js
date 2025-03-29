var mode = document.getElementById("mode");
mode.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        mode.src = "./src/img/dark-option.svg";
    } else {
        mode.src = "./src/img/light-option.svg"
    }
}