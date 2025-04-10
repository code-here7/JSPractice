function findMAx(a,b,c)
{
    let max;
    if(a>b && a>c)
    {
        
        
            max = a;
    }
    else if(b>a && b>c)
    {
        max = b;
    }
    else
    {
        max = c;
    }
    return max;
}

console.log(findMAx(8,10,7))
