// console.log("apple1");

// setTimeout(()=>{
//   console.log("apple2");
// }, 2000);

// console.log("apple3");

// async way to show file
const fs = require('fs');
fs.readFile("text/Siam.txt", "utf-8", (error, data)=>{
  if ( error){
    return false;
  }
  console.log(data);
})
console.log("Siam ahmed");

// sync way show file
const data = fs.readFileSync("text/Siam.txt", "utf-8", );
console.log(data);

console.log("end scripts");

