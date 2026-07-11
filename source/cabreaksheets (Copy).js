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
    console.log('start '+apm)

    var apm2 = document.getElementById("apm2").innerHTML
    console.log('end '+apm2)
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

    
    if (apm == 'AM') {
        //0-14
        if (stmn >= 0 && stmn <15 ){
            mnv = 0.0
            console.log(mnv)
            if (apm2 == 'PM'&& ethr<12 ){
                hrcon1 = parseInt(ethr)+12
                mncon1 = parseInt(etmn)*0.01
                etcon1 = hrcon1+mncon1
                
                hrcon2 = hrcon1 - sthr 
                console.log(hrcon2)
                
                if (hrcon2 >=5.5&&hrcon2<6.25){
                    parseSthr = parseInt(sthr)
                    second = parseSthr + 2
                    fourth = parseSthr + 4

                    if (second >= 12){
                        if(second==12){
                        document.getElementById("b1").innerHTML = br+second+':'+parseInt(stmn)

                        }else{
                        document.getElementById("b1").innerHTML = br+second -12+':'+parseInt(stmn)

                        }
                    }else{
                        document.getElementById("b1").innerHTML = br+second+':'+parseInt(stmn)
                    }

                    if (fourth >= 12){
                        if(fourth==12){
                        document.getElementById("lunch").innerHTML = l+fourth+':'+parseInt(stmn)

                        }else{
                        document.getElementById("lunch").innerHTML = l+fourth -12+':'+parseInt(stmn)

                        }
                    }else{
                        document.getElementById("lunch").innerHTML = l+fourth +':'+parseInt(stmn)
                    }
                    document.getElementById("b2").innerHTML = ''
                    

                    


                }

                if (hrcon2 >=6.25){
                    parseSthr = parseInt(sthr)
                    second = parseSthr + 2
                    fourth = parseSthr + 4
                    fifth = parseSthr + 5

                    if (second >= 12){
                        if(second==12){
                        document.getElementById("b1").innerHTML = br+second+':'+'00'

                        }else{
                        document.getElementById("b1").innerHTML = br+second -12+':'+'00'

                        }
                    }else{
                        document.getElementById("b1").innerHTML = br+second+':'+'00'
                    }

                    if (fourth >= 12){
                        if(fourth==12){
                        document.getElementById("lunch").innerHTML = l+fourth+':'+'00'

                        }else{
                        document.getElementById("lunch").innerHTML = l+fourth -12+':'+'00'

                        }
                    }else{
                        document.getElementById("lunch").innerHTML = l+fourth +':'+'00'
                    }

                    document.getElementById("b2").innerHTML = br+fifth +':'+30
                    

                    


                }
            }else{

            }
            
        }
        //15-29
        if (stmn >= 15 && stmn <30 ){
            mnv = 0.25
            console.log(mnv)
        }
        //30-44
        if (stmn >= 30 && stmn <45 ){
            mnv = 0.50
            console.log(mnv)
        }
        //45-59
        if (stmn >= 45 && stmn <59 ){
            mnv = 0.75
            console.log(mnv)
        }
            

    } else {

    }

    








    //=====
    //End Time Processes

    hmnReadEt = ethr+':'+etmn+apm2







    //=====
    //Add Shift

    console.log(emp + '=====' + hmnReadSt + ' to ' + hmnReadEt)

    var shiftEntry = '<p><span contentEditable="true">' + emp + '</span> =-=-=-=-= <span contentEditable="true">' + hmnReadSt + '</span> to <span contentEditable="true">' + hmnReadEt + '</span> =-=-=-=-= <span contentEditable="true">'+document.getElementById("b1").innerHTML+'</span><span contentEditable="true">'+document.getElementById("lunch").innerHTML+'</span><span contentEditable="true">'+document.getElementById("b2").innerHTML+ '</span></p>'
    const div = document.createElement("div");
    div.className = "";
    div.innerHTML = shiftEntry;
    document.getElementById("breaks").appendChild(div);



    
    //=====
}


