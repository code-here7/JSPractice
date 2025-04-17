let person = 
{
    name : "Ibadat",
    age : 30
}

// let {name,age} = person;
// console.log({name,age});

//transfer values to new keys variables
let {name : fname,age : newAge} = person;
console.log({fname,newAge});


//nested Object example
let user = 
{
    name : "Ibadat",
    prop : { char : "shy", looks : "good" , color : "fair"}
}

// let {name,prop} = person;
// console.log({name,prop}); // contain props whole


let {name,prop : {char,looks,color}} = user;
console.log(name);
// console.log(prop);  // shows not defined error as it is separated
console.log(char);
console.log(looks);
console.log(color);
