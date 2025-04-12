let person = {
    "name" : "Huma", 
    age:23, 
    isStudent : true
}


for (keys in person)
{
    console.log(keys);
}
console.log("\n");
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));