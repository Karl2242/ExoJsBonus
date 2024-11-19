let conteneur = document.querySelectorAll("#contenu > .box")
let box;
let mesCouleur = ["#007bff", "red", "yellow", "orange", "gray"]
let compteur = 0

conteneur.forEach((content) => {
content.addEventListener("click", handleChangeSquarColor)
})



function handleChangeSquarColor(){
compteur += 1

for(let i = 0; i < compteur; i ++){

this.style.backgroundColor = mesCouleur[i]

if(compteur === 5){
    compteur = 0
}

}

}