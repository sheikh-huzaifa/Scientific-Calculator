
let calOutput = document.getElementById("calOutput")

function numClick(num) {
    calOutput.value += num;
}

function opClick(op) {
    calOutput.value += op;
    
}

function back() {
    calOutput.value = calOutput.value.slice(0, -1);
}

function pormptClear(clean) {
    calOutput.value = clean;
    calOutput.value = clean;
}

// let hide = () => {
//                     document.getElementById("extra").hidden = false;
                
                
//             }
let unHide = () => {
    let hide=document.getElementById("hideBtn")
    if(hide.value=="⬆️"){
        document.getElementById("extra").hidden = false;
        hide.value="⬇️"
        
    }
    else{
        document.getElementById("extra").hidden = true;
        hide.value="⬆️"
    }
                                    
}      


function calEqual() {
    
    try {
        let result = eval(calOutput.value)
        calOutput.value = result;
    } catch (error) {
        console.log("error : " + error);
        calOutput.value = "Incorrect Enteries";
    }

}

let sinBtn = () => {
    try {
        let result = eval(calOutput.value)
        let sinResult = Math.sin(result)
        calOutput.value= Math.round(sinResult*100)/100;
    } catch (error) {
        console.log("error : " + error);
        calOutput.value = "Incorrect Enteries";
    }

    
}


let cosBtn = () => {
    try {
        let result = eval(calOutput.value)
        let cosResult = Math.cos(result)
        calOutput.value= Math.round(cosResult*100)/100;
    } catch (error) {
        console.log("error : " + error);
        calOutput.value = "Incorrect Enteries";
    }

    
}

let tanBtn = ( ) => {
    try {
        let result = eval(calOutput.value)
        let tanResult = Math.cos(result)
        calOutput.value= Math.round(tanResult*100)/100;
    } catch (error) {
        console.log("error : " + error);
        calOutput.value = "Incorrect Enteries";
    }
    
}

let lnBtn = () =>{
    try {
        let result = eval(calOutput.value)
        let lnResult = Math.LN10(result)
         calOutput.value= Math.round(lnResult*100)/100;
    } catch (error) {
        console.log("error : " + error);
        calOutput.value = "Incorrect Enteries";
    }
    
}

let logBtn = () => {
    try {
        let result = eval(calOutput.value)
        let lonResult = Math.LN10(result)
         calOutput.value= Math.round(lonResult*100)/100;
    } catch (error) {
        console.log("error : " + error);
        calOutput.value = "Incorrect Enteries";
    }
}

let factorialBtn = () => {
    function factorial(n){
        let answer = 1;
         if (n == 0 || n == 1){
        return answer;
        }
        else if(n > 1){
        for(var i = n; i >= 1; i--){
             answer = answer * i;
            }
            return answer;
            }
        else{
            return "number has to be positive."
            }  
        }

        try {
            let result = eval(calOutput.value)
            let factorialResult = factorial(result)
             calOutput.value= factorialResult;
        } catch (error) {
            console.log("error : " + error);
            calOutput.value = "Incorrect Enteries";
        }
}