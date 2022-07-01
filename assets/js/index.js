document.getElementById("frontalLobe").addEventListener("mouseover", myFunction);
function myFunction() {
    document.getElementById("frontalLobe").innerHTML =
        "<h3> The frontal lobe is associated with ...</h3>";
}

// document.getElementById("prarietal").addEventListener("mouseover", myFifthFunction);
// function myFifthFunction() {
//     document.getElementById("parietalLobe").innerHTML =
//         "<h3> The parietal lobe is associated with ...</h3>";
// }

document.getElementById("parietalLobe").addEventListener("mouseover", mySixthFunction);
function mySixthFunction() {
    document.getElementById("parietalLobe").innerHTML
        = "<h3>The prarietal lobe lobe is responsible for... <h3>"
}


document.getElementById("temporalLobe").addEventListener("mouseover", myFifthFunction);
function myFifthFunction() {
    document.getElementById("temporalLobe").innerHTML
        = "<h3>The temporal lobe is responsible for... <h3>"
}

document.getElementById("occipitalLobe").addEventListener("mouseover", myFourthFunction);
function myFourthFunction() {
    document.getElementById("occipitalLobe").innerHTML
        = "<h3>The occipital lobe is responsible for... <h3>"
}


document.getElementById("cerebellum").addEventListener("mouseover", mySecondFunction);
function mySecondFunction() {
    document.getElementById("cerebellum").innerHTML
        = "<h3>The cerebellum is responsible for... <h3>"
}

document.getElementById("spinalCord").addEventListener("mouseover", myThirdFunction);
function myThirdFunction() {
    document.getElementById("spinalCord").innerHTML
        = "<h3>The spinal cord is responsible for... <h3>"
}