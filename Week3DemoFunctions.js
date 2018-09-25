
//any code outside of a function will get called when the window loads

//function associated with a user-driven event 



//function with no arguments and no return value

function writeToConsole()
{
    console.log("hello");

    var x=50;
    var y=100;

    var result = calc(x,y);
    console.log(x,y);

    writeSum(5,10);

    var person = {
        name: "John",
        age: 30
            };

    console.log(person);
    changeName(person);
    console.log(person);
    
    
    //x becomes calcSum and works like a function
    var x = calcSum;
    console.log(x());
    
}

//function with argument and return value
function calc(x,y)
{
    x=x+y;
    console.log(x,y);
    return x;
}

function writeSum(x,y)
{
    var z = x+y;
    console.log(z);
}

//function that takes an object instead of a simple argument
function changeName(obj)
{
    obj.name = "Manjula";
}

function calcSum()
{
    return 2+3;
}

