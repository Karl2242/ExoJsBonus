let nextButton = document.getElementById("nextbutton")
let beforeButton = document.getElementById("beforebutton")
let mesImage = ["./images/asc.jpg", "./images/nadirleplusbo.png", "./images/chillguy.jpg"]
let imgbase = document.getElementById("limg")
let count = 0;


beforeButton.addEventListener("click", buttonBeforeImg)
nextButton.addEventListener("click", nextButtonNewImage)


function nextButtonNewImage(){

count = count + 1

for(let i = 0; i < count; i++){
    console.log(i)
        imgbase.src = mesImage[i]
}

if(count >= 3){
    count = 0
}
}


function buttonBeforeImg(){

    count = count + 1

for(let i = 3; i > count; i--){
    console.log(i)
        imgbase.src = mesImage[i]
}

if(count >= 0){
    count = 3
}


}

