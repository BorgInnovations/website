
function topMenu_load(){


  
    document.getElementById("topMenu").innerHTML = '<ul><li><a href="./index.html">B0RG</a></li><li><a class="nbus" onclick="showproducts()">Products</a></li><li><a class="nbus" onclick="showcontact()">Contact</a></li></ul>'
    document.getElementById('products').innerHTML = '<div class="card"><div class="card-heading"><h1>Products.</h1> </div><div class="card-body"><div><h3>C0RT3X 01</h3><p>A human-centric research platform.</p><p><a href="./c0rt3x.html"><button class="bbus">Start Using</button></a></p></div></div></div>'
  }
  
  function footMenu_load(){
  
    document.getElementById("footMenu").innerHTML = '<p style="text-align: center;"><a href="./index.html"><img src="./img/icons/BI_1.svg" style="width: 200px;padding: 15px;" alt=""></a></p><p style="text-align: center;">© 2025 Jacob Borg</p>'
  
  }
  