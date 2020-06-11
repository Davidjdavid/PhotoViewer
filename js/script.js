const leftBtn = document.getElementById("leftButton");
const currentImage = document.getElementById("imageSource");
const imgs =document.createElement("imagez");
imgs.setAttribute("src", "images/art9.jpg");
const images= document.createElement("img")
const num = 0;
leftBtn.addEventListener('click', leftPicture);

function leftPicture() {
    currentImage.append(imgs);
}