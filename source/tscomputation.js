
//Save Functions
function saveSheet(){

    localStorage.sheet = document.getElementById("sheetBody").innerHTML
    localStorage.header = document.getElementById("sheetHeader").innerHTML
    localStorage.footer = document.getElementById("sheetFooter").innerHTML
    localStorage.note = document.getElementById("note").innerHTML
    window.alert('Saved in browser')
}

function loadSheet(){

    document.getElementById("sheetBody").innerHTML = localStorage.sheet
    document.getElementById("sheetHeader").innerHTML = localStorage.header
    document.getElementById("sheetFooter").innerHTML = localStorage.footer
    document.getElementById("note").innerHTML = localStorage.note
}

function deleteSheet(){
    if (confirm("Are you sure you want to DELETE? This CANNOT be undone.")){

        localStorage.sheet = ''
        localStorage.header = ''
        localStorage.footer = ''
        localStorage.note = 'notes here'


    document.getElementById("sheetBody").innerHTML = ''
    document.getElementById("sheetHeader").innerHTML = ''
    document.getElementById("sheetFooter").innerHTML = ''
    document.getElementById("note").innerHTML = 'notes here'
        

    }else{

    }

}


    function saveFile() {
      const business  = localStorage.business
      const team  = localStorage.team
      const date  = localStorage.date
      const sheet  = localStorage.sheet
      const note  = localStorage.note

      var blob = new Blob(
         ['<h1>' + business + '</h1>', '<p>' +team + '</p>','<p>' +date + '</p>', '<section>' + sheet + '</section>','<p>Notes:</p>','<section>' + note + '</section>','<h3><i>type sheet</i> is in alpha</h3>','<p><i>verify accuracy before use</i></p>'],
         { type: "text/plain;charset=utf-8" }
      );
      saveAs(blob, team+"typesheet.html");
   }




//
function injectFunc(){
    document.getElementById("function").innerHTML = 'add'
}


//globals
var varCount ='0'
var result = ''
//Add
function add(){
    document.getElementById("function").value = 'add'
    document.getElementById("funcSign").innerHTML = '<button onclick="minus()" class="abus" id="">+</button>'
    document.getElementById("funcButt").innerHTML = '<button onclick="addFunc()" class="abus" id="">=</button>'
}

function minus(){
    document.getElementById("function").value = 'subtract'
    document.getElementById("funcSign").innerHTML = '<button onclick="add()" class="abus" id="">-</button>'
    document.getElementById("funcButt").innerHTML = '<button onclick="subFunc()" class="abus" id="">=</button>'
}

function addFunc(){
    varNum1 = parseFloat(document.getElementById('var1').value)
    varNum2 = parseFloat(document.getElementById('var2').value)

    funcRes = varNum1+varNum2
    
    result = funcRes
    document.getElementById('vizCell1').innerHTML = varNum1
    document.getElementById('vizCell2').innerHTML = varNum2
    document.getElementById('vizResult').innerHTML = result
    document.getElementById('result').innerHTML = result


}

function subFunc(){
    varNum1 = parseFloat(document.getElementById('var1').value)
    varNum2 = parseFloat(document.getElementById('var2').value)

    funcRes = varNum1-varNum2
    
    result = funcRes
    document.getElementById('vizCell1').innerHTML = varNum1
    document.getElementById('vizCell2').innerHTML = varNum2
    document.getElementById('vizResult').innerHTML = result
    document.getElementById('result').innerHTML = result


}


function showShifts() {
    var x = document.getElementById("shiftMenu");
    if (x.style.display === "none") {
       x.style.display = "block";

    } else {
       x.style.display = "none";

    }
 }

//


function addVar() {
    var vars = document.getElementById("varNum").innerHTML
    const varNum = parseInt(vars)
    document.getElementById("varNum").innerHTML = varNum+1
    console.log(varNum)
    const span = document.createElement("span");
    span.id = 'var'+varNum+1
    span.className = "";
    span.innerHTML = varNum+1;
    document.getElementById("vars").appendChild(span);

    const varBtn = document.createElement("input");
    varBtn.id = varNum+1
    varBtn.className = "text-input";
    varBtn.type = 'number';
    varBtn.style = 'width:50%; max-width: 75px; min-width: 50px; text-align: center;'
    varBtn.placeholder = 'var'
    document.getElementById("inputVars").appendChild(varBtn);

}


function addLine() {





    varCount = parseFloat(varCount)+1
    console.log(varCount)
    formVar1 = document.getElementById('vizCell1').innerHTML
    formVar2 = document.getElementById('vizCell2').innerHTML
    color = document.getElementById('color').innerHTML
    const tr = document.createElement("tr");
    tr.className = "";
    tr.contentEditable = 'true';
    tr.innerHTML = '<td style="border-color:'+color+'; color:'+color+';">'+formVar1+'</td>'+'<td style="border-color:'+color+'; color:'+color+';">'+formVar2+'</td>'+'<td style="border-color:'+color+'; color:'+color+';">'+result+'</td>';
    document.getElementById("sheetBody").appendChild(tr);



    
    //=====
}

function removeLastLine(){
    const sheet = document.getElementById("sheetTable");
    sheet.removeChild(sheet.lastElementChild);
}



