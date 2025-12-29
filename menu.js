
function topMenu_load() {



  document.getElementById("topMenu").innerHTML = '<ul><li><a href="./index.html">B0RG</a></li><li><a class="nbus" onclick="showproducts()">Projects</a></li><li><a class="nbus" onclick="showcontact()">Contact</a></li></ul>'
  document.getElementById('products').innerHTML = '<div class="card"><div class="card-heading"><h1>Projects.</h1> </div><div class="card-body"><div><h3>C0RT3X 01</h3><p>A human-centric research platform.</p><p><a href="./c0rt3x.html"><button class="abus">Learn More</button></a></p><h3>Project Luminary</h3><p>Revisitng modern code standards.</p><p><a href="./luminary.html"><button class="abus">Learn More</button></a></p><h3>Author</h3><p>A browser based document editor.</p><p><a href="./author.html"><button class="abus">Learn More</button></a></p>                <h3>Buy Me a Coffee</h3>  <p>Fighting the AI-slop is not free.</p> <p><a href="https://buymeacoffee.com/jborg_arts" target="_BLANK"><button class="obus" >Buy Me a Coffee</button></a></p></div></div></div>'
}

function footMenu_load() {

  document.getElementById("footMenu").innerHTML = '    <p style="text-align: center;"><a href="./index.html"><img src="./img/icons/BI_1.svg" style="width: 200px;padding: 15px;" alt=""></a></p><p style="text-align: center;">Organically coded in San Diego, CA</p><center><p><a class="a" href="https://buymeacoffee.com/jborg_arts" target="_blank"> <button class="obus">Buy me a coffee</button> </a></p><p><a class="a" href="./privacy.html">Privacy</a> | <a class="a" href="https://borginnovations.cronitorstatus.com/" target="_BLANK">Status</a></p></center><p style="text-align: center;">© 2025 Jacob Borg</p>  '

}

function footMenu_load_alt() {

  document.getElementById("footMenu").innerHTML = '<p style="text-align: center;"><a href="./index.html"><img src="./img/icons/BorgRetroFuturism_4.svg" style="width: 200px;padding: 15px;" alt=""></a></p><p style="text-align: center;">Organically coded in San Diego, CA</p><center><p><a href="https://buymeacoffee.com/jborg_arts" target="_blank" class="a-alt"> Buy me a coffee </a></p><p><a class="a-alt" href="./privacy.html">Privacy</a> | <a class="a-alt" href="https://borginnovations.cronitorstatus.com/" target="_BLANK">Status</a></p></center><p style="text-align: center;">© 2025 Jacob Borg</p>  '
}

function loadContact() {
  /*
  document.getElementById("contact").innerHTML = '<div class="card"><div class="card-heading"><h1>Contact.</h1></div ><div class="card-body"><center><iframe style="border: none; width: 640px; height: 701px" src="https://docs.getgrist.com/forms/b1EUs21w5g3cSCF67jrWbe/9"></iframe></center></div></div > '
  */
 console.log('Loaded')
 
}
