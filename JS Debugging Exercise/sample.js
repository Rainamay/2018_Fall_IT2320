function displayFruits()
{
    document.getElementById("display-panel").innerHTML="";

    var fruits = ["apple","orange","banana","grapes","watermelon"];

    for (i=0;i<5;i++)
    {
            document.getElementById("display-panel").innerHTML+= "<p>"+fruits[i]+"</p>";
            if (IsTropical(fruits[i]))
                document.getElementById("display-panel").innerHTML+= " is tropical ";
            else
                document.getElementById("display-panel").innerHTML+= " is NOT tropical ";

}

function AddNumbers()
{
    document.getElementById("display-panel").innerHTML="";

    var numbers = [2,4,6,8,10,12,14];

    for (i=1;i<=numbers.length;i++)
    {
        var sum=0;    
        sum+=numbers[i];
    }
    
    document.getElementById("display-panel").innerHTML="Sum of numbers "+numbers+" is equal to "+sum;
    
}

function EvenOrOddCalc()
{    
    var evenOddFlag = EvenOrOdd;
    console.log(evenOddFlag);
}


function EvenOrOdd()
{
    
    document.getElementById("display-panel").innerHTML="";
    var evenOdd = [13,4,2,67,94,35,654];
    var even=odd="";
    var i=j=0;
    var flag=0;

   for(i=0;i<evenOdd.length;i++)    
   {
        flag = evenOdd[i]%2;
        if (flag = 0)
            even+=" "+evenOdd[i];
        else
            odd+=" "+evenOdd[i];
        
    };
    document.getElementById("display-panel").innerHTML="<p>Given numbers: "+evenOdd+"</p>";
    document.getElementById("display-panel").innerHTML+="<p>Even:  "+even+" Odd: "+odd+"</p>";
    
    return true;
}


function GenerateNumbers()
{
    //There are 9 prime numbers and 10 odd numbers.Fix the bugs so the right count displays

    var num = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var factorFound;
    var prime=0;
    for (i=0;i<num.length;i++)
    {  
        
        if (num[i] == 2)
            prime++;
        else
        {
            for (j=2;j<num[i];j++) //Check from 2 to num-1 and see if the number has factors other than 1 and itself
            {
                if ((num[i] % j)==0)                 
                    factorFound++;                    
            }
        
            if (!factorFound) //No factors
                prime++;
        }

        var odd=0;
        if (num[i]%2 != 0)
            odd++;

   }
    document.getElementById("display-panel").innerHTML="Given array "+num;
    document.getElementById("display-panel").innerHTML+=" Prime count = "+prime;
    document.getElementById("display-panel").innerHTML+=" Odd count "+ odd;
}