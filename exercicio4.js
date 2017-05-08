var x = document.getElementById("texto");
x.onkeyup = function(){
    document.getElementById("box").innerHTML = x.value;
}