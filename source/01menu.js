function oiMenu_load() {
    document.getElementById("menuList").innerHTML = '<div class="card-body"><center><p> <a href="./01.html" class="subMenuItem">Home</a> </p><p> <a href="./01_author" class="subMenuItem">Author|</a> </p><p> <a href="./01_c0rt3x.html" class="subMenuItem">C0RT3X</a> </p></center></div>'
    console.log('01 menu factor loaded')
  }


function showMenu() {

    var x = document.getElementById("menuList");
    if (x.style.display === "none") {
       x.style.display = "block";
       document.getElementById("iobtn").innerHTML = "XX";
    } else {
       x.style.display = "none";
       document.getElementById("iobtn").innerHTML = "01";
    }
 }

