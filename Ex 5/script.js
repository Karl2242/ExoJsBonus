let nextButton = document.getElementById("nextbutton")
let beforeButton = document.getElementById("beforebutton")
let mesImage = ["./images/chillguy.jpg","./images/asc.jpg", "./images/nadirleplusbo.png"]
let imgbase = document.getElementById("limg")
let count = 0;


beforeButton.addEventListener("click", buttonBeforeImg)
nextButton.addEventListener("click", nextButtonNewImage)


function nextButtonNewImage(){
if(count === mesImage.length - 1){
count = 0;
} else{
    count += 1
}
imgbase.src= mesImage[count]
}

function buttonBeforeImg(){
    if(count === 0){
    count = 2;
    } else{
        count -= 1
    }
    imgbase.src= mesImage[count]
    }
    