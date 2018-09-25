
window.onload = function()
{
    //attach event listenere for click, mouseover and mouseout
    document.getElementById("btn1").addEventListener("click",function(){
        writeToConsole();
    });
    
    //document.getElementById("btn1").removeEventListener("click",writeToConsole);
}

//Remove eventlistener


function domTest()
{    
    console.log(document.getElementById("btn2").innerHTML);
    //Show content of a button - ingle element demo

    var paraArray = document.getElementsByTagName("p");
    
    console.log(paraArray.length);
    console.log(paraArray[0].innerHTML);
    
    for(i=0;i<paraArray.length;i++)
    {
        paraArray[i].style.borderStyle = "solid";
        paraArray[i].style.borderColor = "green";
    }

    //Set border for all <p> - Collection demo

    //Set color for all classes for <p> - Collection/Style demo
    var blueArray = document.getElementsByClassName("blue");
    for(i=0;i<blueArray.length;i++)
    {
         blueArray[i].style.color = "blue";
    }
    //Create and append a child <p> to main-content

    var p = document.createElement("p");
    p.innerHTML = "New Paragraph just added";
    document.getElementById("main-content").appendChild(p);

}

