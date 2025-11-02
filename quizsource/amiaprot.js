/* Am I a Prot or a Heretic Quiz Script */


function amiaprot() {
    document.getElementById("quizzes").style.display = 'none'
    document.getElementById("qheader").innerHTML = 'Am I a Chad or am I a Heretic?'
    document.getElementById("quiz").style.display = 'block'

    /*
        document.getElementById("quiz").innerHTML = 'cheese'
        */
}
var hscore = 0
var pscore = 0


/*Q1*/
function qa1() {
    pscore += 1

    console.log(pscore)
    console.log(hscore)
    console.log('***')
}
function qa2() {
    hscore += 1

    console.log(pscore)
    console.log(hscore)
    console.log('***')
}
function qa3() {
    hscore += 1

    console.log(pscore)
    console.log(hscore)
    console.log('***')
}
function qa4() {
    hscore += 1

    console.log(pscore)
    console.log(hscore)
    console.log('***')
}

function hideq1() {
    document.getElementById("q1").style.display = 'none'
    document.getElementById("q2").style.display = 'block'
}



/*Q2*/

function qb1() {
    hscore += 1

    console.log(pscore)
    console.log(hscore)
    console.log('***')
}
function qb2() {
    pscore += 1

    console.log(pscore)
    console.log(hscore)
    console.log('***')
}
function qb3() {
    hscore += 1

    console.log(pscore)
    console.log(hscore)
    console.log('***')
}
function qb4() {
    hscore += 1

    console.log(pscore)
    console.log(hscore)
    console.log('***')
}

function hideq2() {
    document.getElementById("q2").style.display = 'none'
    document.getElementById("q3").style.display = 'block'
}


/*Q3*/

function qc1() {
    hscore += 1

    console.log(pscore)
    console.log(hscore)
    console.log('***')
}
function qc2() {
    pscore += 1

    console.log(pscore)
    console.log(hscore)
    console.log('***')
}
function qc3() {
    hscore += 10

    console.log(pscore)
    console.log(hscore)
    console.log('***')
}
function qc4() {
    pscore += 1

    console.log(pscore)
    console.log(hscore)
    console.log('***')
}

function hideq3() {
    document.getElementById("q3").style.display = 'none'

    if (hscore > 2) {
        document.getElementById("qresult").style.display = 'block'
        document.getElementById("qresult").innerHTML = '<h3>Uh oh, HERETIC</h3><p>Seems you commune with bad theology. Do better champ.</p><p>Pick up thy Bible and start reading Hebrews.</p>'
        console.log("HERETIC")
        console.log('***')
    } else {
        document.getElementById("qresult").style.display = 'block'
        document.getElementById("qresult").innerHTML = '<h3>You are a CHAD</h3><p>Nice, you believe in the authority of Scripcture and reject modernism.</p>'
        console.log("CHAD")
        console.log('***')


    }
}

