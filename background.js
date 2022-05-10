const images = 
["lamp.jpg", 
"notebook.jpg", 
"workout.jpg",];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const showImage = document.createElement("img");
showImage.src = `${chosenImage}`;

document.body.appendChild(showImage);