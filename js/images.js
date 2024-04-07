const petDiv = document.getElementById("other-page-pets");
const petImg = document.getElementById("animal");

petImg.style.display = "none";
petDiv.addEventListener("mouseover", showPet);
petDiv.addEventListener("mouseout", noPet);

function showPet(){
    petImg.setAttribute("style","visibility : visible");
}

function noPet(){
    petImg.setAttribute("style","visibility : hidden");
}

const cookingDiv = document.getElementById("other-page-cooking");
const cookingImg = document.getElementById("food");

cookingImg.style.display = "none";
cookingDiv.addEventListener("mouseover", showFood);
cookingDiv.addEventListener("mouseout", noFood);

function showFood(){
    cookingImg.setAttribute("style","visibility : visible");
}

function noFood(){
    cookingImg.setAttribute("style","visibility : hidden");
}

const travelDiv = document.getElementById("other-page-travel");
const travelImg = document.getElementById("travelvac");
travelImg.style.display = "none";
travelDiv.addEventListener("mouseover", showTravel);
travelDiv.addEventListener("mouseout", noTravel);

function showTravel(){
    travelImg.setAttribute("style","visibility : visible");
}

function noTravel(){
    travelImg.setAttribute("style","visibility : hidden");
}
