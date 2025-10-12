
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
          

            

setInterval(function() {

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

  localStorage["margins"] = document.getElementById("document").style.margin + ' '; // content div
  localStorage["padding"] = document.getElementById("document").style.paddingBottom + ' '; // content div

}, 1000);
function clear(){
  localStorage.clear();
}



function hide(){
document.getElementById("controlBar").style.visibility = "hidden";
document.getElementById("footerHide").style.visibility = "hidden";
var x = document.getElementById("top");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}
function show(){
document.getElementById("controlBar").style.visibility = "visible";
document.getElementById("footerHide").style.visibility = "visible";
var x = document.getElementById("top");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "visible";
}
}

function hide3(){
   document.getElementById("mobileditor1").style.visibility = 'hidden';
   document.getElementById("mobileditor2").style.visibility = 'hidden';
   document.getElementById("mobileditor3").style.visibility = 'hidden';

}
function show3(){
   document.getElementById("mobileditor1").style.visibility = 'visible';
   document.getElementById("mobileditor2").style.visibility = 'visible';
   document.getElementById("mobileditor3").style.visibility = 'visible';

}
function hide2(){

   


   document.getElementById("ab").style.visibility = 'visible';
var x = document.getElementById("controlBar2");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}


function show2(){
   document.getElementById("ab").style.visibility = 'hidden';
var x = document.getElementById("controlBar2");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "visible";
}
}

function hcustomcolor(){


   document.getElementById("heading").style.color = document.getElementById("customcolor").value;
}

function bcustomcolor(){


   document.getElementById("body").style.color = document.getElementById("customcolor").value;
}


function hcustomsize(){


   document.getElementById("heading").style.fontSize = document.getElementById("customsize").value;
}

function bcustomsize(){


   document.getElementById("body").style.fontSize = document.getElementById("customsize").value;
}

function fcustomsize(){


   document.getElementById("footer").style.fontSize = document.getElementById("customsize").value;
}




function hcustomfont(){
   document.getElementById("heading").style.fontFamily = document.getElementById("customfont").value;
}

function bcustomfont(){
   document.getElementById("heading").style.fontFamily = document.getElementById("customfont").value;
}

function fcustomfont(){
   document.getElementById("heading").style.fontFamily = document.getElementById("customfont").value;
}






function fcustomcolor(){


   document.getElementById("footer").style.color = document.getElementById("customcolor").value;
}

function hrecallcolor(){
   document.getElementById("hcustomcolor").value = document.getElementById("heading").style.color;
}
function brecallcolor(){
   document.getElementById("bcustomcolor").value = document.getElementById("body").style.color;
}
function frecallcolor(){
   document.getElementById("fcustomcolor").value = document.getElementById("footer").style.color;
}

function colorinspect(){
   document.getElementById("inspectortitle").innerHTML = 'Color Inspector';
   document.getElementById("inspector1").innerHTML = 'Heading: ' + document.getElementById("heading").style.color;
   document.getElementById("inspector2").innerHTML = 'Body: ' + document.getElementById("body").style.color;
   document.getElementById("inspector3").innerHTML = 'Footer: ' + document.getElementById("footer").style.color;

   document.getElementById("inspectorcontrols").innerHTML = '<button class="btn btn-outline-dark" onclick="closeinspector();">X</button>';

}



function closeinspector(){
   document.getElementById("inspectortitle").innerHTML = '';
   document.getElementById("inspector1").innerHTML = '';
   document.getElementById("inspector2").innerHTML = '';
   document.getElementById("inspector3").innerHTML = '';

   document.getElementById("inspectorcontrols").innerHTML = '';

}



function welcome(){
   document.getElementById("iframe").src = "./welcome.html";
}
function meme(){
   document.getElementById("iframe").src = "./meme.html";
}
function doc1(){
   document.getElementById("iframe").src = "./doc.html";
}
function doc2(){
   document.getElementById("iframe").src = "./doc2.html";
}
function doc3(){
   document.getElementById("iframe").src = "./doc3.html";
}
function doc4(){
   document.getElementById("iframe").src = "./doc4.html";
}
function doc5(){
   document.getElementById("iframe").src = "./doc5.html";
}
function doc6(){
   document.getElementById("iframe").src = "./doc6.html";
}
function doc7(){
   document.getElementById("iframe").src = "./doc7.html";
}
function docapp(){
   document.getElementById("iframe").src = "./docapp.html";
}

function privacy(){
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


function setmargint() {
   document.getElementById("document").style.marginTop = document.getElementById("custommargin").value;
}
function setmarginr() {
   document.getElementById("document").style.marginRight = document.getElementById("custommargin").value;
}
function setmarginb() {
   document.getElementById("document").style.paddingBottom = document.getElementById("custommargin").value;
}
function setmarginl() {
   document.getElementById("document").style.marginLeft = document.getElementById("custommargin").value;
}

function settitle() {
   document.getElementById("heading").innerHTML =
   localStorage["title"+document.getElementById("documentname").value] || "The title"; // default text
}

function resetstyles() {
   localStorage["titles"] = 'ba_l';
   localStorage["bodys"] = 'ba_m';
   localStorage["footers"] = 'ba_m';
   
   document.getElementById("heading").className = 'ba_l';
   document.getElementById("body").className = 'ba_m';
   document.getElementById("footer").className = 'ba_m';

   localStorage["titlec"] = '#000';
   localStorage["bodyc"] = '#000';
   localStorage["footerc"] = '#000';

   document.getElementById("heading").style.color = '#000';
   document.getElementById("body").style.color = '#000';
   document.getElementById("footer").style.color = '#000';

   localStorage["titlefw"] = 'normal';
   localStorage["bodyfw"] = 'normal';
   localStorage["footerfw"] = 'normal';

   document.getElementById("heading").style.fontWeight = 'normal';
   document.getElementById("body").style.fontWeight = 'normal';
   document.getElementById("footer").style.fontWeight = 'normal';

   localStorage["titlefs"] = 'normal';
   localStorage["bodyfs"] = 'normal';
   localStorage["footerfs"] = 'normal';

   document.getElementById("heading").style.fontStyle = 'normal';
   document.getElementById("body").style.fontStyle = 'normal';
   document.getElementById("footer").style.fontStyle = 'normal';

   localStorage["titlea"] = 'left';
   localStorage["bodya"] = 'left';
   localStorage["footera"] = 'left';

   document.getElementById("heading").style.textAlign = 'left';
   document.getElementById("body").style.textAlign = 'left';
   document.getElementById("footer").style.textAlign = 'left';

   localStorage["margins"] = '10px';

   document.getElementById("document").style.margin = '10px';

   localStorage["padding"] = '10px';

   document.getElementById("document").style.paddpaddingBottoming = '10px';

}

function cleardocument() {
   localStorage["title"] = '';
   localStorage["body"] = '';
   localStorage["footer"] = '';
   
   document.getElementById("heading").innerHTML = 'The Title';
   document.getElementById("body").innerHTML = 'The Body';
   document.getElementById("footer").innerHTML = 'The Footer';

      localStorage["titles"] = 'pn_l';
   localStorage["bodys"] = 'pn_m';
   localStorage["footers"] = 'pn_m';
   
   document.getElementById("heading").className = 'pn_l';
   document.getElementById("body").className = 'pn_m';
   document.getElementById("footer").className = 'pn_m';

   localStorage["titlec"] = '#000';
   localStorage["bodyc"] = '#000';
   localStorage["footerc"] = '#000';

   document.getElementById("heading").style.color = '#000';
   document.getElementById("body").style.color = '#000';
   document.getElementById("footer").style.color = '#000';

   localStorage["titlefw"] = 'normal';
   localStorage["bodyfw"] = 'normal';
   localStorage["footerfw"] = 'normal';

   document.getElementById("heading").style.fontWeight = 'normal';
   document.getElementById("body").style.fontWeight = 'normal';
   document.getElementById("footer").style.fontWeight = 'normal';

   localStorage["titlefs"] = 'normal';
   localStorage["bodyfs"] = 'normal';
   localStorage["footerfs"] = 'normal';

   document.getElementById("heading").style.fontStyle = 'normal';
   document.getElementById("body").style.fontStyle = 'normal';
   document.getElementById("footer").style.fontStyle = 'normal';

   localStorage["titlea"] = 'left';
   localStorage["bodya"] = 'left';
   localStorage["footera"] = 'left';

   document.getElementById("heading").style.textAlign = 'left';
   document.getElementById("body").style.textAlign = 'left';
   document.getElementById("footer").style.textAlign = 'left';

   localStorage["margins"] = '10px';

   document.getElementById("document").style.margin = '10px';

   localStorage["padding"] = '10px';

   document.getElementById("document").style.paddingBottom = '10px';  
}