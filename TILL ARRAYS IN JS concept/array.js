let marks = [85,97,44,37,76,60];
// for-of loop
for (let i of marks) {
  console.log(i);
}
let sum = 0;
for (let val of marks ){
  sum += val;
}
let avg = sum/marks.length;
console.log(`the avgerage marks of the class is ${avg}`);


let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// console.log(companies);
let remove=companies.splice(2,1,"ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);