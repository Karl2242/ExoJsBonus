let button = document.getElementById("lebutton")
let boxx = document.getElementById("labox")
let compteur = 1;


button.addEventListener("click", handleClickOnButton);

function handleClickOnButton(){
    compteur = compteur + 1
    if(compteur % 2 === 0){
    document.body.style.backgroundColor = "gray"
    boxx.style.display = "block"
} else{
document.body.style.backgroundColor = "white"
    boxx.style.display = "none"
}


};