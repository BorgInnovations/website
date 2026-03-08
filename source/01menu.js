function oiMenu_load() {
    console.log('01 menu factor loaded')
  }


function showMenu() {
    document.getElementById("menuList").innerHTML = '<div class="card-body"><center><p> <a href="./01.html" class="subMenuItem">Home</a> </p><p> <a href="./01_author.html" class="subMenuItem">Author|</a> </p><p> <a href="./01_c0rt3x.html" class="subMenuItem">C0RT3X</a> </p><p> <a href="./01_luminary.html" class="subMenuItem">Luminary</a> </p><p> <a href="./01_about.html" class="subMenuItem">About</a> </p></center></div>';
    var x = document.getElementById("menuList");
    if (x.style.display === "none") {
       x.style.display = "block";
       document.getElementById("iobtn").innerHTML = 'XX';
    } else {
       x.style.display = "none";
       document.getElementById("iobtn").innerHTML = "01";
    }
 }

 function showA() {
    document.getElementById("menuList").innerHTML = '<div class="card-body"><center><ul><li><a onclick=" file()">File</a></li><li><a onclick=" edit()">Edit</a></li><li><a onclick=" cortex01()">C0RT3X01</a></li></ul></center></div>'

    var x = document.getElementById("menuList");
    if (x.style.display === "none") {
       x.style.display = "block";
       document.getElementById("abtn").innerHTML = 'XX';
    } else {
       x.style.display = "none";
       document.getElementById("abtn").innerHTML = "A|";
    }
 }

 function showL() {
    document.getElementById("menuList").innerHTML = '<div class="card-body"><center><ul><li><a onclick=" saveFile()">Download</a></li></ul></center></div>'

    var x = document.getElementById("menuList");
    if (x.style.display === "none") {
       x.style.display = "block";
       document.getElementById("abtn").innerHTML = 'XX';
    } else {
       x.style.display = "none";
       document.getElementById("abtn").innerHTML = "L|";
    }
 }
function closeA(){
    document.getElementById("menuList").innerHTML = ''
    document.getElementById("menuList").style.display = 'none'
    document.getElementById("abtn").innerHTML = 'A|'
}
