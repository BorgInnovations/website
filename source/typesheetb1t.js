/*
B1T:
Computational Query Algorithm

01/15/2026
B0RG INNOVATIONS
JACOB BORG
*/

/* Global Vars */

//sys ver
let sysNam = 'B1T '
let sysVer = 'Alpha 1.0 '
let sysDat = '1/17/2026'
let sysAuth = 'BORG '

function sysConf(){
    console.log(sysNam+sysVer)
    console.log('Built by '+sysAuth)
}
//end

//HTML comps
let p = '<p>'
let _p = '</p>'
//end

//Const
let algoError = 'BYT3 Algorithm Error'
//end

/* end */


function sendCommand(){
    const splitters = [':' || ','];
    const commandVars = [','];
    const commandBrs = ['&'];
    function_get = document.getElementById("byt3_command").value
    function_got = function_get.replace(/\s/g, '')
    splitter = function_get.split(splitters);
    family = splitter[0]
    command = splitter[1]

    commandVarSpl = command.split(commandVars);
    commandVar1 = commandVarSpl[0].replace(/\s/g, '')
    commandVar2 = commandVarSpl[1]
    commandVar2Dcl = commandVar2.replace(/\s/g, '')
    commandBrSpl = commandVar2.split(commandBrs);
    commandBr1 = commandBrSpl[0].replace(/\s/g, '')



    console.log(function_got)




    // Search Family 
    if (family == 'search'){
        console.log('family: '+family)
        console.log('command: '+commandVar1)
        console.log('query: '+commandVar2)
        
        if (commandVar1 == 'all'){
            window.open('https://www.startpage.com/do/search?query='+commandVar2)
            window.open('https://www.qwant.com/?q='+commandVar2)
            window.open('https://duckduckgo.com/'+commandVar2)    
        }

        if (commandVar1 == 'duckduckgo'){

            window.open('https://duckduckgo.com/'+commandVar2)
    
        }
        
        if (commandVar1 == 'startpage'){

            window.open('https://www.startpage.com/do/search?query='+commandVar2)
    
        }

        if (commandVar1 == 'qwant'){

            window.open('https://www.qwant.com/?q='+commandVar2)
    
        }


        //wikis

        if (commandVar1 == 'wikis'){
            window.open('https://en.wikipedia.org/wiki/'+commandVar2)

            window.open('http://www.scholarpedia.org/w/index.php?search='+commandVar2)

            window.open('https://www.britannica.com/search?query='+commandVar2)

            window.open('https://grokipedia.com/search?q='+commandVar2)
    
        }
        if (commandVar1 == 'wikipedia'){

            window.open('https://en.wikipedia.org/wiki/'+commandVar2)
    
        }

        if (commandVar1 == 'scholarpedia'){

            window.open('http://www.scholarpedia.org/w/index.php?search='+commandVar2)
    
        }

        if (commandVar1 == 'britannica'){

            window.open('https://www.britannica.com/search?query='+commandVar2)
    
        }
        if (commandVar1 == 'grokipedia'){

            window.open('https://grokipedia.com/search?q='+commandVar2)
    
        }



    }


    // Define Family
    if (family == 'define'){
        console.log('family: '+family)
        console.log('command: '+commandVar1)
        console.log('query: '+commandVar2)

        if (commandVar1 == 'word'){

            window.open('https://en.wiktionary.org/wiki/'+commandVar2)
    
        }

        if (commandVar1 == 'wiktionary'){

            window.open('https://en.wiktionary.org/wiki/'+commandVar2)
    
        }
        if (commandVar1 == 'webster'){

            window.open('https://www.merriam-webster.com/dictionary/'+commandVar2)
    
        }
        if (commandVar1 == 'oxford'){

            window.open('https://www.oed.com/search/dictionary/?scope=Entries&q='+commandVar2)
    
        }

        if (commandVar1 == 'medical'){

            window.open('https://openmd.com/define?q='+commandVar2)
    
        }

        if (commandVar1 == 'technology'){

            window.open('https://techterms.com/definition/'+commandVar2)
    
        }
    
    
    }


    // Math Family

    if (family == 'math'){
        console.log('family: '+family)
        console.log('command: '+commandVar1)
        console.log('query: '+commandVar2)

        
        if (commandVar1 == 'add'){

            mathFunction = commandVar2.split(commandBrs)
            var mathFunctionVar1 = mathFunction[0].replace(/\s/g, '')
            var mathFunctionVar2 = mathFunction[1].replace(/\s/g, '')
            console.log(mathFunctionVar1+' | '+mathFunctionVar2)

            result = Number(mathFunctionVar1)+Number(mathFunctionVar2)
            console.log(result)
            document.getElementById('byt3_output').style.display = 'block'
            document.getElementById('byt3_output').innerHTML = mathFunctionVar1 + ' ' + commandVar1 + ' ' + mathFunctionVar2 + ' = ' + result

        }
        if (commandVar1 == '+'){

            mathFunction = commandVar2.split(commandBrs)
            var mathFunctionVar1 = mathFunction[0].replace(/\s/g, '')
            var mathFunctionVar2 = mathFunction[1].replace(/\s/g, '')
            console.log(mathFunctionVar1+' | '+mathFunctionVar2)

            result = Number(mathFunctionVar1)+Number(mathFunctionVar2)
            console.log(result)
            document.getElementById('byt3_output').style.display = 'block'
            document.getElementById('byt3_output').innerHTML = mathFunctionVar1 + ' ' + commandVar1 + ' ' + mathFunctionVar2 + ' = ' + result

        }

        if (commandVar1 == 'subtract'){

            mathFunction = commandVar2.split(commandBrs)
            var mathFunctionVar1 = mathFunction[0].replace(/\s/g, '')
            var mathFunctionVar2 = mathFunction[1].replace(/\s/g, '')
            console.log(mathFunctionVar1+' | '+mathFunctionVar2)

            result = Number(mathFunctionVar1)-Number(mathFunctionVar2)
            console.log(result)
            document.getElementById('byt3_output').style.display = 'block'
            document.getElementById('byt3_output').innerHTML = mathFunctionVar1 + ' ' + commandVar1 + ' ' + mathFunctionVar2 + ' = ' + result

            
        }
        if (commandVar1 == '-'){

            mathFunction = commandVar2.split(commandBrs)
            var mathFunctionVar1 = mathFunction[0].replace(/\s/g, '')
            var mathFunctionVar2 = mathFunction[1].replace(/\s/g, '')
            console.log(mathFunctionVar1+' | '+mathFunctionVar2)

            result = Number(mathFunctionVar1)-Number(mathFunctionVar2)
            console.log(result)
            document.getElementById('byt3_output').style.display = 'block'
            document.getElementById('byt3_output').innerHTML = mathFunctionVar1 + ' ' + commandVar1 + ' ' + mathFunctionVar2 + ' = ' + result

            
        }

        if (commandVar1 == 'divide'){

            mathFunction = commandVar2.split(commandBrs)
            var mathFunctionVar1 = mathFunction[0].replace(/\s/g, '')
            var mathFunctionVar2 = mathFunction[1].replace(/\s/g, '')
            console.log(mathFunctionVar1+' | '+mathFunctionVar2)

            result = Number(mathFunctionVar1) / Number(mathFunctionVar2)
            console.log(result)
            document.getElementById('byt3_output').style.display = 'block'
            document.getElementById('byt3_output').innerHTML = mathFunctionVar1 + ' ' + commandVar1 + ' ' + mathFunctionVar2 + ' = ' + result

            
        }
        if (commandVar1 == '/'){

            mathFunction = commandVar2.split(commandBrs)
            var mathFunctionVar1 = mathFunction[0].replace(/\s/g, '')
            var mathFunctionVar2 = mathFunction[1].replace(/\s/g, '')
            console.log(mathFunctionVar1+' | '+mathFunctionVar2)

            result = Number(mathFunctionVar1) / Number(mathFunctionVar2)
            console.log(result)
            document.getElementById('byt3_output').style.display = 'block'
            document.getElementById('byt3_output').innerHTML = mathFunctionVar1 + ' ' + commandVar1 + ' ' + mathFunctionVar2 + ' = ' + result

            
        }

        if (commandVar1 == 'multiply'){

            mathFunction = commandVar2.split(commandBrs)
            var mathFunctionVar1 = mathFunction[0].replace(/\s/g, '')
            var mathFunctionVar2 = mathFunction[1].replace(/\s/g, '')
            console.log(mathFunctionVar1+' | '+mathFunctionVar2)

            result = Number(mathFunctionVar1) * Number(mathFunctionVar2)
            console.log(result)
            document.getElementById('byt3_output').style.display = 'block'
            document.getElementById('byt3_output').innerHTML = mathFunctionVar1 + ' ' + commandVar1 + ' ' + mathFunctionVar2 + ' = ' + result

            
        }
        if (commandVar1 == '*'){

            mathFunction = commandVar2.split(commandBrs)
            var mathFunctionVar1 = mathFunction[0].replace(/\s/g, '')
            var mathFunctionVar2 = mathFunction[1].replace(/\s/g, '')
            console.log(mathFunctionVar1+' | '+mathFunctionVar2)

            result = Number(mathFunctionVar1) * Number(mathFunctionVar2)
            console.log(result)
            document.getElementById('byt3_output').style.display = 'block'
            document.getElementById('byt3_output').innerHTML = mathFunctionVar1 + ' ' + commandVar1 + ' ' + mathFunctionVar2 + ' = ' + result

            
        }
        

    }



}

