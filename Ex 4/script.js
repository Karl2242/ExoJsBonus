let lecontainers = document.querySelectorAll("#container > div")

console.log(lecontainers);

lecontainers.forEach((element) => {

    element.addEventListener("mouseenter", handleMouseEnterStopBlur);
    element.addEventListener("mouseleave", handleMouseLeaveAddBlur);
    element.addEventListener("mousedown", handleMouseDownDivTall);
    element.addEventListener("mouseup", handleMouseUpDivSmall);

})

function handleMouseEnterStopBlur(event){
let ladiv = event.target
ladiv.classList.replace("mabox", "maboxnrml")
}

function handleMouseLeaveAddBlur(event){
    let ladiv = event.target
    ladiv.classList.replace("maboxnrml", "mabox")
    }

    function handleMouseDownDivTall(event){
        let ladiv = event.target
        ladiv.classList.replace("maboxnrml", "maboxnrmlgrande")
    }
    

    function handleMouseUpDivSmall(event){
        let ladiv = event.target
        ladiv.classList.replace("maboxnrmlgrande", "maboxnrml")
    }