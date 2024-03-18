var personName = "Arbaz ahmed khan";
console.log("lower case", personName.toLocaleLowerCase());
console.log("upper case", personName.toUpperCase());
console.log("title case", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
