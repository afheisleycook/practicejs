const max = 100;
let counter = 0;
for(let n = 1;counter<= 100;counter)
{
    counter++;
    if(counter % 3 == 0) 
    {
        console.log(counter + ":fizz") 

    }
    if(counter % 5 == 0) 
    {
        console.log(counter+ ": Buzz");


    }
    console.log(counter + "fizbuzz");
   
}