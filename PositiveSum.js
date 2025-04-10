//Write an arrow function that takes two numbers and returns their sum only if both are positive, otherwise returns "Invalid".

const sumIfPositive = (a, b) => {
  if(a>0 && b>0)
  {
      let result = a+b;
      return result;
  }
  else
  {
      return "Invalid";
  }
  
};

console.log(sumIfPositive(3, 5)); // Output: 8
console.log(sumIfPositive(-2, 4)); // Output: "Invalid"
