//Create an anonymous function to check if a number is even or odd, and assign it to a variable.


const checkNo = function (n)
{
    if(n%2==0)
    {
        return "even";
    }
    else 
    {
        return "odd";
    }
}

console.log(checkNo(3))
