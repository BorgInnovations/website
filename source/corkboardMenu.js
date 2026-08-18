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
    document.getElementById("tag").innerHTML = '<button id="tagbtn" onclick="tagpur()" class="gbus">Grn</button>';

}

function tagpur() {
    document.getElementById("tagv").innerHTML = 'pur';
    console.log("tag grn")
    document.getElementById("tag").innerHTML = '<button id="tagbtn" onclick="tagyel()" class="pbus">Pur</button>';

}

function tagyel() {
    document.getElementById("tagv").innerHTML = 'yel';
    console.log("tag grn")
    document.getElementById("tag").innerHTML = '<button id="tagbtn" onclick="tagnul()" class="ybus">Yel</button>';

}

function tagnul() {
    document.getElementById("tagv").innerHTML = 'nul';
    console.log("tag nul")
    document.getElementById("tag").innerHTML = '<button id="tagbtn" onclick="tagblu()" class="abus">Tag</button>';

}
