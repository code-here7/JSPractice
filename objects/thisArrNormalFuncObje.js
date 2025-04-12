//Note: Arrow function ka this global scope ka hota hai, lekin let
//  name = "Riana" se this.name (i.e., window.name) set nahi hota 
// — browser me explicitly window.name = "Riana" karna padega; Node.js me
//  this global ho sakta hai depending on context, lekin let name = "Riana" se this.name set nahi hota.
//Kehne ka matlab: let name = "Riana" se this.name kabhi set nahi hota — dono me 
// explicit assignment chahiye (window.name ya global.name).
//✅ Final verdict: Tumhara concept sahi hai, bas technically let sirf 
// block-scoped variable banata hai, global object ka property nahi banata — ye hi core baat hai.

this.name = "Riana";
let person = {
    name : "Huma", 
     normGreet : function ()
     {
         return this.name;
     },
     arrowGreet : () =>
     {
         return this.name;
     }
}

console.log(person.normGreet());
console.log(person.arrowGreet());