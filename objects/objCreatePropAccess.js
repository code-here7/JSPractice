let person = {
    "name" : "Huma", 
    age:23, 
    isStudent : true
}


console.log(person);
console.log(person["name"]);  //barckets => 1.Property name has spaces/special characters
// 2.key in a variable
// 3.Dynamic property access 



console.log(person.age); //dot notation => Property name is a valid identifier (no spaces, no special characters)
console.log(person.isStudent);