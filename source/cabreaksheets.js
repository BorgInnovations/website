
//Save Functions
function saveSheet(){
    localStorage.sheet = document.getElementById("breaks").innerHTML
    localStorage.business = document.getElementById("business").innerHTML
    localStorage.team = document.getElementById("team").innerHTML
    localStorage.date = document.getElementById("date").innerHTML
    localStorage.note = document.getElementById("note").innerHTML
    window.alert('Saved in browser')
}

function loadSheet(){
    document.getElementById("breaks").innerHTML = localStorage.sheet
    document.getElementById("business").innerHTML = localStorage.business
    document.getElementById("team").innerHTML = localStorage.team
    document.getElementById("date").innerHTML = localStorage.date
    document.getElementById("note").innerHTML = localStorage.note
}

function deleteSheet(){
    if (confirm("Are you sure you want to DELETE? This CANNOT be undone.")){
        document.getElementById("breaks").innerHTML = ''
        localStorage.sheet = ''

        document.getElementById("name").value = ''
        document.getElementById("sthr").value = ''
        document.getElementById("stmn").value = ''
        document.getElementById("ethr").value = ''
        document.getElementById("etmn").value = ''
    document.getElementById("business").innerHTML = 'business'
    document.getElementById("team").innerHTML = 'team/department'
    document.getElementById("date").innerHTML = 'xx/xx/xx'
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

//Shift Type
function leadShift(){
    document.getElementById("shiftName").innerHTML = 'lead'
}

function supervisorShift(){
    document.getElementById("shiftName").innerHTML = 'sup'
}

function assistantSupShift(){
    document.getElementById("shiftName").innerHTML = 'as'
}

function frontlineShift(){
    document.getElementById("shiftName").innerHTML = 'fl'
}

function supportShift(){
    document.getElementById("shiftName").innerHTML = 'support'
}

function backOfHouseShift(){
    document.getElementById("shiftName").innerHTML = 'boh'
}

function customShift(){
    document.getElementById("shiftName").innerHTML = document.getElementById("shiftTitle").value
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


function amStart() {
    var pm = '<button id="apm" onclick="pmStart()" class="gbus">AM</button>'
    document.getElementById("startVal").innerHTML = pm
}

function pmStart() {
    var am = '<button id="apm" onclick="amStart()" class="bbus">PM</button>'
    document.getElementById("startVal").innerHTML = am

}

function amEnd() {
    var apm2 = '<button id="apm2" onclick="pmEnd()" class="gbus">AM</button>'
    document.getElementById("endVal").innerHTML = apm2
}

function pmEnd() {
    var apm2 = '<button id="apm2" onclick="amEnd()" class="bbus">PM</button>'
    document.getElementById("endVal").innerHTML = apm2


}




function addShift() {
    var errorMod = document.getElementById("error").innerHTML
    var emp = document.getElementById("name").value
    var apm = document.getElementById("apm").innerHTML

    var apm2 = document.getElementById("apm2").innerHTML

    //Start Time Vars
    var sthr = document.getElementById("sthr").value
    var stmn = document.getElementById("stmn").value

    //End Time Vars
    var ethr = document.getElementById("ethr").value
    var etmn = document.getElementById("etmn").value
    const br = ' Break '
    const l = ' Lunch '

    //Start Time Processes

    hmnReadSt = sthr+':'+stmn+apm
           //0-14
        if (stmn >= 0 && stmn <15 ){
            mnv = 0.0
            document.getElementById("hrmnv").innerHTML = '00'
            document.getElementById("stmnVar").innerHTML = '00'

        }
        //15-29
        if (stmn >= 15 && stmn <30 ){
            mnv = 0.25

            document.getElementById("hrmnv").innerHTML = '15'
            document.getElementById("stmnVar").innerHTML = mnv
        }
        //30-44
        if (stmn >= 30 && stmn <45 ){
            mnv = 0.50
  
            document.getElementById("hrmnv").innerHTML = '30'
            document.getElementById("stmnVar").innerHTML = mnv
        }
        //45-59
        if (stmn >= 45 && stmn <59 ){
            mnv = 0.75

            document.getElementById("hrmnv").innerHTML = '45'
            document.getElementById("stmnVar").innerHTML = mnv
        }
    
    if (apm == 'AM') {
            startingHr = parseInt(sthr)
            if (startingHr == 12){
                document.getElementById("sthrVar").innerHTML = startingHr -12
            }else{
                document.getElementById("sthrVar").innerHTML = startingHr
            }

    } else {
            if (startingHr == 12){
                document.getElementById("sthrVar").innerHTML = startingHr
            }else{
                document.getElementById("sthrVar").innerHTML = startingHr+12
            }
        
    }



    








    //=====
    //End Time Processes

    hmnReadEt = ethr+':'+etmn+apm2


               //0-14
        if (etmn >= 0 && etmn <15 ){
            mnv = 0.0
            document.getElementById("etmnv").innerHTML = '00'
            document.getElementById("etmnVar").innerHTML = '00'

        }
        //15-29
        if (etmn >= 15 && etmn <30 ){
            mnv = 0.25

            document.getElementById("etmnv").innerHTML = '15'
            document.getElementById("etmnVar").innerHTML = mnv
        }
        //30-44
        if (etmn >= 30 && etmn <45 ){
            mnv = 0.50
  
            document.getElementById("etmnv").innerHTML = '30'
            document.getElementById("etmnVar").innerHTML = mnv
        }
        //45-59
        if (etmn >= 45 && etmn <59 ){
            mnv = 0.75

            document.getElementById("etmnv").innerHTML = '45'
            document.getElementById("etmnVar").innerHTML = mnv
        }

    if (apm2 == 'AM') {
            endingHr = parseInt(ethr)
            if (endingHr == 12){
                document.getElementById("ethrVar").innerHTML = endingHr -12
            }else{
                document.getElementById("ethrVar").innerHTML = endingHr
            }

    } else {
        endingHr = parseInt(ethr)
            if (endingHr == 12){
                document.getElementById("ethrVar").innerHTML = endingHr
            }else{
                document.getElementById("ethrVar").innerHTML = endingHr+12
            }
        
    }


    //=====
    //Add Shift
        //Hours Processes
        eHr = parseInt(document.getElementById("ethrVar").innerHTML)
        sHr = parseInt(document.getElementById("sthrVar").innerHTML)
        var hours = eHr - sHr
        console.log(hours)

        eMn = parseFloat(document.getElementById("etmnVar").innerHTML)
        sMn = parseFloat(document.getElementById("stmnVar").innerHTML)
        var mins = eMn - sMn
        console.log(mins)

        var totalTime = hours + mins
        console.log(totalTime)


        //=====

        //Breaks Processes

        //less than 2 hour error
        if (totalTime <= 2){
            document.getElementById("error").innerHTML = '<i style="color: red"> MIN HRS NOT MET</i>'
            console.log('no break required')
                document.getElementById("b1").innerHTML ='no break required'
                document.getElementById("lunch").innerHTML = ''
                document.getElementById("b2").innerHTML = ''

        }

        //no breaks 3 hour or less
        if (totalTime >= 2 && totalTime <= 3){
            document.getElementById("error").innerHTML = ''
            console.log('no break required')
                document.getElementById("b1").innerHTML ='no break required'
                document.getElementById("lunch").innerHTML = ''
                document.getElementById("b2").innerHTML = ''

        }

        //one break 3-5
        if (totalTime >= 3 && totalTime < 5){
            document.getElementById("error").innerHTML = ''
            console.log('break required')
            br1t = parseInt(sthr) + 2
            if (br1t>12){
                afternoon = br1t-12
                document.getElementById("b1").innerHTML ='break '+ afternoon
                document.getElementById("lunch").innerHTML = ''
                document.getElementById("b2").innerHTML = ''

            }else{
                document.getElementById("b1").innerHTML ='break '+  br1t
                document.getElementById("lunch").innerHTML = ''
                document.getElementById("b2").innerHTML = ''
            }


        }

        //break and lunch 5 - 6.25
        if (totalTime >= 5 && totalTime <= 6){
            document.getElementById("error").innerHTML = ''
            console.log('break required and lunch')
            br1t = parseInt(sthr) + 1 +':'+ parseFloat(stmn)
            lunch = parseInt(sthr) + 3 
            if (br1t>12){
                afternoon = br1t-12
                document.getElementById("b1").innerHTML ='break '+ afternoon + ' '

            }else{
                document.getElementById("b1").innerHTML ='break '+  br1t + ' '

            }
            if (lunch>12){
                lTime = lunch-12
                document.getElementById("lunch").innerHTML ='lunch '+ lTime

            }else{
                document.getElementById("lunch").innerHTML ='lunch '+  lunch
            }
        }

        //2 breaks and lunch 6.25 - 7
        if (totalTime >= 6.25 && totalTime <= 7){
            document.getElementById("error").innerHTML = ''
            console.log('2 break required and lunch')
            br1t = parseInt(sthr) + 2 +':00'
            lunch = parseInt(sthr) + 4 +':00'
            br2t = parseInt(sthr) + 5
            if (br1t>12){
                afternoon = br1t-12
                document.getElementById("b1").innerHTML ='break '+ afternoon + ' '

            }else{
                document.getElementById("b1").innerHTML ='break '+  br1t + ' '

            }
            if (lunch>12){
                lTime = lunch-12
                document.getElementById("lunch").innerHTML ='lunch '+ lTime

            }else{
                document.getElementById("lunch").innerHTML ='lunch '+  lunch
            }
            if (br2t>12){
                evening = br2t-12
                document.getElementById("b2").innerHTML =' break '+ evening +':'+ parseFloat(stmn)+ ' '

            }else{
                document.getElementById("b2").innerHTML =' break '+  br2t + ' '

            }
        }

                //2 breaks and lunch 6.25 - 7
        if (totalTime > 7 && totalTime <= 8.5){
            document.getElementById("error").innerHTML = ''
            console.log('2 break required and lunch')
            br1t = parseInt(sthr) + 2 +':00'
            lunch = parseInt(sthr) + 4 +':00'
            br2t = parseInt(sthr) + 6
            if (br1t>12){
                afternoon = br1t-12
                document.getElementById("b1").innerHTML ='break '+ afternoon + ' '

            }else{
                document.getElementById("b1").innerHTML ='break '+  br1t + ' '

            }
            if (lunch>12){
                lTime = lunch-12
                document.getElementById("lunch").innerHTML ='lunch '+ lTime

            }else{
                document.getElementById("lunch").innerHTML ='lunch '+  lunch
            }
            if (br2t>12){
                evening = br2t-12
                document.getElementById("b2").innerHTML =' break '+ evening +':'+ parseFloat(stmn)+ ' '

            }else{
                document.getElementById("b2").innerHTML =' break '+  br2t +':'+ parseFloat(stmn)+' '

            }
        }

        //OT ERROR
        if (totalTime > 8.5){
            document.getElementById("error").innerHTML = '<i style="color: red"> OT</i>'
            console.log('2 break required and lunch')
            br1t = parseInt(sthr) + 2 +':00'
            lunch = parseInt(sthr) + 4 +':00'
            br2t = parseInt(sthr) + 6 +':'+ parseFloat(stmn)
            if (br1t>12){
                afternoon = br1t-12
                document.getElementById("b1").innerHTML ='break '+ afternoon + ' '

            }else{
                document.getElementById("b1").innerHTML ='break '+  br1t + ' '

            }
            if (lunch>12){
                lTime = lunch-12
                document.getElementById("lunch").innerHTML ='lunch '+ lTime

            }else{
                document.getElementById("lunch").innerHTML ='lunch '+  lunch
            }
            if (br2t>12){
                evening = br2t-12
                document.getElementById("b2").innerHTML =' break '+ evening + ' '

            }else{
                document.getElementById("b2").innerHTML =' break '+  br2t + ' '

            }

        }


        //=====
    console.log(emp + ' | ' + hmnReadSt + ' to ' + hmnReadEt+' | '+totalTime+' | ')

    var shiftEntry = '<p><span contentEditable="true">' + emp + '</span> | '+document.getElementById("shiftName").innerHTML+' | =-=-=-=-= <span contentEditable="true">' + hmnReadSt + '</span> to <span contentEditable="true">' + hmnReadEt + '</span> | <span contenteditable="true">'+totalTime+'</span>'+document.getElementById("error").innerHTML+' | =-=-=-=-= <span contentEditable="true">'+document.getElementById("b1").innerHTML+'</span><span contentEditable="true">'+document.getElementById("lunch").innerHTML+'</span><span contentEditable="true">'+document.getElementById("b2").innerHTML+ '</span></p>'
    const div = document.createElement("div");
    div.className = "";
    div.innerHTML = shiftEntry;
    document.getElementById("breaks").appendChild(div);



    
    //=====
}

function removeLastShift(){
    const sheet = document.getElementById("breaks");
    sheet.removeChild(sheet.lastElementChild);
}



