function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('img-flexbox');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    // image.width = "250px";
    div.appendChild(image);
}