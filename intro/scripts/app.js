var GRAVITY = 1.8; //global variable

function hello(){
    let color ="Blue";
    console.log("Hello there!", color);
}

function sayHello(firstName, lastName){
    console.log("Hello" + firstName + " " + lastName);
}

function printSumResult(num1,num2,num3){
    let total = num1 + num2 +num3;
    console.log("Result",total)
}

function sum(num1,num2){
    if (num2 == 0){
        return "ERROR: Zero division not allowed";
    }else{
        return num1/num2;
    }
    console.log("NEVER CALLED");
}

function saveData(){
    //validate data
    if(dataValid == false){
        return;
    }
    //send data to server

    //show success message
}

function printSomeNumbers(){
    // print all except 11 or 13: "if(i !=11 && i !=13){console.log(i);"
    for(let i=0; i < 21; i++){
        console.log(i);
    }
}

function init(){
    console.log("Intro page");

    // load data

    // assign event
    hello();

    let name ="derek";
    sayHello(name, "dolan");

    printSumResult(21,21,-90);
    
    let answer = sum(21,21);
    console.log("The anser is", answer); //42

    let div1= divide(100,10);
    let div2= divide(200,0); //ERROR: Zero division is not allowed
    console.log(div1,div2);

    printSomeNumbers(); //0 to 20
}



window.onload = init;