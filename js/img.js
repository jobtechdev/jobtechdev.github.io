
window.onload = function(){
var modal = document.getElementById('myModal');

var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "../../images/pdf-inbjudan_l.jpg";

};

};