var color1 = document.getElementById('color1');
var color2 = documnet.getElementById('color2');
var body = document.getElementById('body');
function changebckgnd() {
    body.style.background= `linear-gradient(to right,${color1.value},${color2.value})`;
}
color1.addEventListener("input",changebckgrnd);
color2.addEventListener("input",changebckgrnd);