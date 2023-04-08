function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
function colorFlip(){
    var randomColor= getRandomColor();
    document.body.style.backgroundColor = randomColor;
}