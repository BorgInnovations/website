
document.getElementById("heading").innerHTML =
   localStorage["title"] || "The title"; // default text
document.getElementById("body").innerHTML =
   localStorage["text"] || "The body"; // default text
document.getElementById("footer").innerHTML =
   localStorage["footer"] || "The footer"; // default text

document.getElementById("heading").style.color =
   localStorage["titlec"] || "#000"; // default text
document.getElementById("body").style.color =
   localStorage["textc"] || "#000"; // default text
document.getElementById("footer").style.color =
   localStorage["footerc"] || "#000"; // default text

document.getElementById("heading").style.fontSize =
   localStorage["titlefs"] || "18pt"; // default text
document.getElementById("body").style.fontSize =
   localStorage["textfs"] || "12pt"; // default text
document.getElementById("footer").style.fontSize =
   localStorage["footerfs"] || "12pt"; // default text

document.getElementById("heading").style.fontWeight =
   localStorage["titlefw"] || "normal"; // default text
document.getElementById("body").style.fontWeight =
   localStorage["textfw"] || "normal"; // default text
document.getElementById("footer").style.fontWeight =
   localStorage["footerfw"] || "normal"; // default text

document.getElementById("heading").style.fontStyle =
   localStorage["titlefs"] || "normal"; // default text
document.getElementById("body").style.fontStyle =
   localStorage["textfs"] || "normal"; // default text
document.getElementById("footer").style.fontStyle =
   localStorage["footerfs"] || "normal"; // default text


document.getElementById("heading").style.textAlign =
   localStorage["titlea"] || "left"; // default text
document.getElementById("body").style.textAlign =
   localStorage["texta"] || "left"; // default text
document.getElementById("footer").style.textAlign =
   localStorage["footera"] || "left"; // default text

document.getElementById("document").style.margin =
   localStorage["margins"] || "0px"; // default text
document.getElementById("document").style.paddingBottom =
   localStorage["padding"] || "0px"; // default text




setInterval(function () {

   // fuction that is saving the innerHTML of the div



   localStorage["title"] = document.getElementById("heading").innerHTML + ' '; // heading div
   localStorage["text"] = document.getElementById("body").innerHTML + ' '; // content div
   localStorage["footer"] = document.getElementById("footer").innerHTML + ' '; // content div

   localStorage["titlec"] = document.getElementById("header-color").style.color + ' '; // heading div
   localStorage["textc"] = document.getElementById("body-color").style.color + ' '; // content div
   localStorage["footerc"] = document.getElementById("footer-color").style.color + ' '; // content div

   localStorage["titlefs"] = document.getElementById("heading").style.fontSize + ' '; // heading div
   localStorage["textfs"] = document.getElementById("body").style.fontSize + ' '; // content div
   localStorage["footerfs"] = document.getElementById("footer").style.fontSize + ' '; // content div

   localStorage["titlefw"] = document.getElementById("heading").style.fontWeight + ' '; // heading div
   localStorage["textfw"] = document.getElementById("body").style.fontWeight + ' '; // content div
   localStorage["footerfw"] = document.getElementById("footer").style.fontWeight + ' '; // content div

   localStorage["titlefs"] = document.getElementById("heading").style.fontStyle + ' '; // heading div
   localStorage["textfs"] = document.getElementById("body").style.fontStyle + ' '; // content div
   localStorage["footerfs"] = document.getElementById("footer").style.fontStyle + ' '; // content div

   localStorage["titlea"] = document.getElementById("header-alignment").style.textAlign + ' '; // heading div
   localStorage["texta"] = document.getElementById("body-alignment").style.textAlign + ' '; // content div
   localStorage["footera"] = document.getElementById("footer-alignment").style.textAlign + ' '; // content div
}, 1000);
function clear() {
   localStorage.clear();
}
/* Navigation Controls */
function file() {
   var x = document.getElementById("file");
   if (x.style.display === "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none";
   }
}

function edit() {
   var x = document.getElementById("edit");
   if (x.style.display === "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none";
   }
}

function color() {
   var x = document.getElementById("color");
   if (x.style.display === "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none";
   }
}

/* End Navigation Controls */

/* Editor Controls */


function headingcon() {
   document.getElementById("ac_1").innerHTML = '<a class="a-alt" onclick="headingcon(); hleft()">Left </a>';
   document.getElementById("ac_2").innerHTML = '<a class="a-alt" onclick="headingcon(); hcenter()">Center </a>';
   document.getElementById("ac_3").innerHTML = '<a class="a-alt" onclick="headingcon(); hright()">Right </a>';

   var x = document.getElementById("alignmentcons");
   if (x.style.display === "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none";
   }

}

function bodycon() {
   document.getElementById("ac_1").innerHTML = '<a class="a-alt" onclick="bodycon(); bleft()">Left </a>';
   document.getElementById("ac_2").innerHTML = '<a class="a-alt" onclick="bodycon(); bcenter()">Center </a>';
   document.getElementById("ac_3").innerHTML = '<a class="a-alt" onclick="bodycon(); bright()">Right </a>';


   var x = document.getElementById("alignmentcons");
   if (x.style.display === "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none";
   }

}

function footercon() {

   document.getElementById("ac_1").innerHTML = '<a class="a-alt" onclick="footercon(); fleft()">Left </a>';
   document.getElementById("ac_2").innerHTML = '<a class="a-alt" onclick="footercon(); fcenter()">Center </a>';
   document.getElementById("ac_3").innerHTML = '<a class="a-alt" onclick="footercon(); fright()">Right </a>';


   var x = document.getElementById("alignmentcons");
   if (x.style.display === "none") {
      x.style.display = "block";
   } else {
      x.style.display = "none";
   }

}

function headingalignment() {
   document.getElementById("heading").style.textAlign = "left";
   localStorage["titlea"] = "left" + ' ';
}

/* Alignment Controls */

function hleft() {
   document.getElementById("heading").style.textAlign = "left";
   localStorage["titlea"] = "left" + ' ';
}
function hcenter() {
   document.getElementById("heading").style.textAlign = "center";
   localStorage["titlea"] = "center" + ' ';
}
function hright() {
   document.getElementById("heading").style.textAlign = "right";
   localStorage["titlea"] = "right" + ' ';
}


function bleft() {
   document.getElementById("body").style.textAlign = "left";
   localStorage["texta"] = "left" + ' ';
}
function bcenter() {
   document.getElementById("body").style.textAlign = "center";
   localStorage["texta"] = "center" + ' ';
}
function bright() {
   document.getElementById("body").style.textAlign = "right";
   localStorage["texta"] = "right" + ' ';
}


function fleft() {
   document.getElementById("footer").style.textAlign = "left";
   localStorage["footera"] = "left" + ' ';
}
function fcenter() {
   document.getElementById("footer").style.textAlign = "center";
   localStorage["footera"] = "center" + ' ';
}
function fright() {
   document.getElementById("footer").style.textAlign = "right";
   localStorage["footera"] = "right" + ' ';
}

/* Font Controls */

function hsetsize() {
   var ff = document.getElementById("customsize").value;
   document.getElementById("heading").style.fontSize = ff;
   localStorage["titlefs"] = ff + ' ';
}
function bsetsize() {
   var ff = document.getElementById("customsize").value;
   document.getElementById("body").style.fontSize = ff;
   localStorage["bodyfs"] = ff + ' ';
}

function fsetsize() {
   var ff = document.getElementById("customsize").value;
   document.getElementById("footer").style.fontSize = ff;
   localStorage["footerfs"] = ff + ' ';
}



/* Color Controls */

function hcustomcolor() {


   document.getElementById("heading").style.color = document.getElementById("customcolor").value;
   localStorage["titlec"] = document.getElementById("customcolor").value + ' ';
}
function bcustomcolor() {


   document.getElementById("body").style.color = document.getElementById("customcolor").value;
   localStorage["bodyc"] = document.getElementById("customcolor").value + ' ';
}
function fcustomcolor() {


   document.getElementById("footer").style.color = document.getElementById("customcolor").value;
   localStorage["footerc"] = document.getElementById("customcolor").value + ' ';
}

/* End Editor Control */

function welcome() {
   document.getElementById("iframe").src = "./welcome.html";
}
function meme() {
   document.getElementById("iframe").src = "./meme.html";
}
function doc1() {
   document.getElementById("iframe").src = "./doc.html";
}

function docapp() {
   document.getElementById("iframe").src = "./docapp.html";
}

function privacy() {
   document.getElementById("iframe").src = "./privacy.html";
}

function save() {
   var blob = new Blob([localStorage["title"], localStorage["text"], localStorage["footer"]],
      { type: "text/plain;charset=utf-8" });
   saveAs(blob, "author.txt");
}

function expand() {
   document.getElementById("document").style.height = "500px";
}

function shrink() {
   document.getElementById("document").style.height = "3in";
}



function cleardocument() {
   localStorage["title"] = 'The Title';
   localStorage["body"] = 'The Body';
   localStorage["footer"] = 'The Footer';

   document.getElementById("heading").innerHTML = 'The Title';
   document.getElementById("body").innerHTML = 'The Body';
   document.getElementById("footer").innerHTML = 'The Footer';

   localStorage["titlec"] = '#000';
   localStorage["bodyc"] = '#000';
   localStorage["footerc"] = '#000';

   document.getElementById("heading").style.color = '#000';
   document.getElementById("body").style.color = '#000';
   document.getElementById("footer").style.color = '#000';

   localStorage["titlea"] = 'left';
   localStorage["bodya"] = 'left';
   localStorage["footera"] = 'left';

   document.getElementById("heading").style.textAlign = 'left';
   document.getElementById("body").style.textAlign = 'left';
   document.getElementById("footer").style.textAlign = 'left';

}