//Securing Object: using freeze- total secure, using seal - only values secure, not structure

// let men = 
// {
//     name : "Ibadat",
//     age : 40
// }

// Object.freeze(men);

// men.name = "Rihan";     // ❌ Won't work
// men.age = 42;   // ❌ Won't add
// delete men.age;        // ❌ Won't delete
// console.log(men);
// console.log(Object.isFrozen(men)); // true (if frozen)

let women = 
{
    name : "Noor",
    age : 35
}

Object.seal(women);
women.name = "Nisha";     //Will work
women.age = 33;    //Will work
women.isGood = "yes" //Not work because structure is fixed
delete women.age; //Not work because structure is fixed
console.log(women);
console.log(Object.isSealed(women)); // true (if sealed)
