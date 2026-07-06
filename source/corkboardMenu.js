function tagblu() {
    document.getElementById("tagv").innerHTML = 'blu';
    console.log("tag blu")
    document.getElementById("tag").innerHTML = '<button id="tagbtn" onclick="tagred()" class="bbus">Blu</button>';

}

function tagred() {
    document.getElementById("tagv").innerHTML = 'red';
    console.log("tag red")
    document.getElementById("tag").innerHTML = '<button id="tagbtn" onclick="taggrn()" class="obus">Red</button>';

}

function taggrn() {
    document.getElementById("tagv").innerHTML = 'grn';
    console.log("tag grn")
    document.getElementById("tag").innerHTML = '<button id="tagbtn" onclick="tagnul()" class="gbus">Grn</button>';

}

function tagnul() {
    document.getElementById("tagv").innerHTML = 'nul';
    console.log("tag nul")
    document.getElementById("tag").innerHTML = '<button id="tagbtn" onclick="tagblu()" class="abus">Tag</button>';

}
