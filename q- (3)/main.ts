let personName: string= "Arbaz ahmed khan";
console.log("lower case", personName.toLocaleLowerCase());

console.log("upper case", personName.toUpperCase());

console.log("title case", personName.replace(/\bw/g,c => c.toUpperCase()));
