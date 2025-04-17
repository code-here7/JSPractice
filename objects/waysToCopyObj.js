//Note sirf deep copy me poora object copy hota baki sab main reference copy hota hai.... destructuring half-half

let person = 
{
    name : "Ibadat",
    age : 40
}

//Reference copy (same memory) - shallow
const user = person;
console.log(person);

//using destructuring - keys (primitive value ko copy krta baki nested object me shallow copy 
let {name,age} = person;
console.log(name);
console.log(age);

//using spread - shallow
let men = {...person}
console.log(men);

//Object.assign - shallow
let women = Object.assign({},person);
women.name = "Noor";
console.log(women.name);

// Object.assign(target, ...sources)
// target: Jisme properties copy karni hain - a new empty object {}.
// sources: Jis object se properties copy karni hain.

// DeepCopy (Nested Object ki bhi deep copy)
let newPerson = JSON.parse(JSON.stringify(person));
console.log(newPerson);