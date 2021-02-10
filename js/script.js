function procesar(){
    var urlimagen = document.getElementById("url-imagen");
    urlimagen.value = urlimagen.value.substring(0, urlimagen.value.length - 6)
    document.getElementById("imagen").src = urlimagen.value;
    document.getElementById("imagen").style.display="block";
}