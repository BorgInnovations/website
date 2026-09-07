
//Save Functions
function saveSheet(){


    localStorage.sheet = document.getElementById("sheetBody").innerHTML
    localStorage.header = document.getElementById("sheetHeader").innerHTML
    localStorage.footer = document.getElementById("sheetFooter").innerHTML
    localStorage.note = document.getElementById("note").innerHTML
    window.alert('Saved in browser')
}

function saveName(){
    var docTitle = prompt("Save Document As").replace(/\s/g, '')

    document.getElementById("sheetHeader").innerHTML = docTitle
    localStorage.sheet = document.getElementById("sheetBody").innerHTML
    localStorage.header = docTitle
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
        localStorage.csv = ''
        localStorage.sheet = ''
        localStorage.header = ''
        localStorage.footer = ''
        localStorage.note = 'notes here'


    document.getElementById("sheetBody").innerHTML = ''
    document.getElementById("sheetHeader").innerHTML = 'new document'
    document.getElementById("sheetFooter").innerHTML = ''
    document.getElementById("note").innerHTML = 'notes here'
        

    }else{

    }

}


    function saveFile() {
      const header  = localStorage.header
      const sheet  = localStorage.sheet
      const note  = localStorage.note


      var blob = new Blob(
         ['<table>' + document.getElementById("sheetBody").innerHTML + '</table>','<p>Notes:</p>','<section>' + note + '</section>','<h3><i>type sheet</i> is in alpha</h3>','<p><i>verify accuracy before use</i></p>'],
         { type: "text/plain;charset=utf-8" }
      );
      saveAs(blob, header+"_typesheet.html");
   }

   function printFile(){
    const header  = localStorage.header
    const sheet  = localStorage.sheet
    const note  = localStorage.note


    const w = window.open("", "_blank");
    w.document.write(`<html><head><title>Sheet</title></head><body><h1>${header}</h1><table style="border-collapse: collapse;">${sheet}</table><h3>Notes:</h3><div>${note}</div></body></html>`);
    w.document.close();
    w.focus();
    w.print();
    w.close();

    console.log('Printer go brrrr');
   }




//
function injectFunc(){
    document.getElementById("function").innerHTML = 'add'
}

function injectLastResult(){
    lastResult = parseFloat(document.getElementById('vizResult').value)
    document.getElementById('var1').value = lastResult
}




//globals
var varCount ='0'
var result = ''
//Add
function add(){
    document.getElementById("function").value = 'add'
    document.getElementById("funcSign").innerHTML = '<button onclick="minus()" class="abus" id="symbol">+</button>'
    document.getElementById("funcButt").innerHTML = '<button onclick="addFunc()" class="abus" id="">=</button>'
}

function minus(){
    document.getElementById("function").value = 'subtract'
    document.getElementById("funcSign").innerHTML = '<button onclick="multiply()" class="abus" id="symbol">-</button>'
    document.getElementById("funcButt").innerHTML = '<button onclick="subFunc()" class="abus" id="">=</button>'
}

function multiply(){
    document.getElementById("function").value = 'multiply'
    document.getElementById("funcSign").innerHTML = '<button onclick="divide()" class="abus" id="symbol">x</button>'
    document.getElementById("funcButt").innerHTML = '<button onclick="multFunc()" class="abus" id="">=</button>'
}

function divide(){
    document.getElementById("function").value = 'divide'
    document.getElementById("funcSign").innerHTML = '<button onclick="add()" class="abus" id="symbol">/</button>'
    document.getElementById("funcButt").innerHTML = '<button onclick="divFunc()" class="abus" id="">=</button>'
}

function exponent(){
    document.getElementById("function").value = 'exponentiation'
    document.getElementById("funcSign").innerHTML = '<button onclick="add()" class="abus" id="symbol">^</button>'
    document.getElementById("funcButt").innerHTML = '<button onclick="expFunc()" class="abus" id="">=</button>'
}

function root(){
    document.getElementById("function").value = 'root'
    document.getElementById("funcSign").innerHTML = '<button onclick="add()" class="abus" id="symbol">✓</button>'
    document.getElementById("funcButt").innerHTML = '<button onclick="rootFunc()" class="abus" id="">=</button>'
}

function sine(){
    document.getElementById("function").value = 'sine'
    document.getElementById("funcSign").innerHTML = '<button onclick="add()" class="abus" id="symbol">sin</button>'
    document.getElementById("funcButt").innerHTML = '<button onclick="rootFunc()" class="abus" id="">=</button>'
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
    document.getElementById('symbolPrev').innerHTML = '+'


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
    document.getElementById('symbolPrev').innerHTML = '-'


}

function multFunc(){
    varNum1 = parseFloat(document.getElementById('var1').value)
    varNum2 = parseFloat(document.getElementById('var2').value)

    funcRes = varNum1*varNum2
    
    result = funcRes
    document.getElementById('vizCell1').innerHTML = varNum1
    document.getElementById('vizCell2').innerHTML = varNum2
    document.getElementById('vizResult').innerHTML = result
    document.getElementById('result').innerHTML = result
    document.getElementById('symbolPrev').innerHTML = 'x'


}

function divFunc(){
    varNum1 = parseFloat(document.getElementById('var1').value)
    varNum2 = parseFloat(document.getElementById('var2').value)

    funcRes = varNum1/varNum2
    
    result = funcRes
    document.getElementById('vizCell1').innerHTML = varNum1
    document.getElementById('vizCell2').innerHTML = varNum2
    document.getElementById('vizResult').innerHTML = result
    document.getElementById('result').innerHTML = result
    document.getElementById('symbolPrev').innerHTML = '/'


}

function expFunc(){
    varNum1 = parseFloat(document.getElementById('var1').value)
    varNum2 = parseFloat(document.getElementById('var2').value)

    funcRes = varNum1**varNum2
    
    result = funcRes
    document.getElementById('vizCell1').innerHTML = varNum1
    document.getElementById('vizCell2').innerHTML = varNum2
    document.getElementById('vizResult').innerHTML = result
    document.getElementById('result').innerHTML = result
    document.getElementById('symbolPrev').innerHTML = '^'


}

function rootFunc(){
    varNum1 = parseFloat(document.getElementById('var1').value)
    varNum2 = parseFloat(document.getElementById('var2').value)

    funcRes = Math.pow(varNum2, 1 / varNum1)
    
    result = funcRes
    document.getElementById('vizCell1').innerHTML = varNum1
    document.getElementById('vizCell2').innerHTML = varNum2
    document.getElementById('vizResult').innerHTML = result
    document.getElementById('result').innerHTML = result
    document.getElementById('symbolPrev').innerHTML = '✓'


}

function sinFunc(){
    varNum1 = parseFloat(document.getElementById('var1').value)


    funcRes = Math.sin(varNum1)
    
    result = funcRes
    document.getElementById('vizCell1').innerHTML = varNum1
    document.getElementById('vizResult').innerHTML = result
    document.getElementById('result').innerHTML = result
    document.getElementById('symbol').innerHTML = ''


}



//Function Sort 
    function funcSort(){

        if (document.getElementById('function').value == 'add') add();
        if (document.getElementById('function').value == 'addition') add();
        if (document.getElementById('function').value == 'minus') minus();
        if (document.getElementById('function').value == 'subtract') minus();
        if (document.getElementById('function').value == 'multiply') multiply();
        if (document.getElementById('function').value == 'times') multiply();
        if (document.getElementById('function').value == 'multiplication') multiply();
        if (document.getElementById('function').value == 'divide') divide();
        if (document.getElementById('function').value == 'division') divide();
        if (document.getElementById('function').value == 'exponentiation') exponent();
        if (document.getElementById('function').value == 'exponent') exponent();
        if (document.getElementById('function').value == 'cube') exponent();
        if (document.getElementById('function').value == 'square') exponent();
        if (document.getElementById('function').value == 'root') root();
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

    

    const csv = localStorage.csv

    varCount = parseFloat(varCount)+1
    console.log(varCount)
    formVar1 = document.getElementById('vizCell1').innerHTML
    symbol = document.getElementById('symbol').innerHTML
    formVar2 = document.getElementById('vizCell2').innerHTML
    color = document.getElementById('color').innerHTML
    const tr = document.createElement("tr");
    tr.className = "";
    tr.contentEditable = 'true';
    tr.innerHTML = '<td style="border: 1px solid black;padding-left: 10px;padding-right: 10px;">'+formVar1+'</td>'+'<td style="border: 1px solid black; padding-left: 10px;padding-right: 10px;">'+symbol+'<td style="border: 1px solid black; padding-left: 10px;padding-right: 10px;">'+formVar2+'</td>'+'<td style="border: 1px solid black;padding-left: 10px;padding-right: 10px;">'+result+'</td>';
    document.getElementById("sheetBody").appendChild(tr);




    
    //=====
}

function addLineMobile() {

    

    const csv = localStorage.csv

    varCount = parseFloat(varCount)+1
    console.log(varCount)
    formVar1 = document.getElementById('vizCell1').innerHTML
    symbol = document.getElementById('symbol').innerHTML
    formVar2 = document.getElementById('vizCell2').innerHTML
    color = document.getElementById('color').innerHTML
    const tr = document.createElement("tr");
    tr.className = "";
    tr.contentEditable = 'true';
    tr.innerHTML = '<td style="border: 1px solid black;padding-left: 10px;padding-right: 10px;">'+formVar1+symbol+formVar2+'</td>'+'<td style="border: 1px solid black;padding-left: 10px;padding-right: 10px;">'+result+'</td>';
    document.getElementById("sheetBody").appendChild(tr);




    
    //=====
}

function addEmptyLine() {

    

    const csv = localStorage.csv

    varCount = parseFloat(varCount)+1
    console.log(varCount)
    formVar1 = 'row'
    symbol = ''
    formVar2 = ''
    color = document.getElementById('color').innerHTML
    const tr = document.createElement("tr");
    tr.className = "";
    tr.contentEditable = 'true';
    tr.innerHTML = '<td style="border: 1px solid black;padding-left: 10px;padding-right: 10px;">'+formVar1+'</td>'+'<td style="border: 1px solid black; padding-left: 10px;padding-right: 10px;">'+symbol+'<td style="border: 1px solid black; padding-left: 10px;padding-right: 10px;">'+formVar2+'</td>'+'<td style="border: 1px solid black;padding-left: 10px;padding-right: 10px;">'+''+'</td>';
    document.getElementById("sheetBody").appendChild(tr);

    //=====
}

function addEmptyLineMobile() {

    

    const csv = localStorage.csv

    varCount = parseFloat(varCount)+1
    console.log(varCount)
    formVar1 = 'row'
    symbol = ''
    formVar2 = ''
    color = document.getElementById('color').innerHTML
    const tr = document.createElement("tr");
    tr.className = "";
    tr.contentEditable = 'true';
    tr.innerHTML = '<td style="border: 1px solid black;padding-left: 10px;padding-right: 10px;">'+formVar1+symbol+formVar2+'</td>'+'<td style="border: 1px solid black;padding-left: 10px;padding-right: 10px;">'+result+'</td>';
    document.getElementById("sheetBody").appendChild(tr);

    //=====
}

function removeLastLine(){
    const sheet = document.getElementById("sheetBody");
    sheet.removeChild(sheet.lastElementChild);
}



function file() {
    var x = document.getElementById("file");
    if (x.style.display === "none") {
       x.style.display = "block";
    } else {
       x.style.display = "none";
    }
 }