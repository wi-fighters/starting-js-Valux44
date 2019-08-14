const data = "Today is Wednesday";
console.log(data.length);
const subStringData = data.substring(7,8);
const subStringData2 = data.substring(1,2)
console.log(subStringData,subStringData2);

//JS
const language = "JavaScript";
console.log(language.length);
console.log(language[0]+language[4]);

// I Can
const search = "I can walk in the park all day!"
const subStringSearch = search.substring(18,22);
console.log(subStringSearch);

//aSc
const aSc = "JavaScript" ;
const subsStringASc = aSc.substring(3,6);
console.log(subsStringASc);

//Uppercase
const uppers = "Hello World";
console.log(uppers.toUpperCase());

//LowerCase
const lower = "Hello Earthling";
console.log(lower.toLowerCase());

//Does it contain...?
const container = "nice shoes";
console.log(container.includes("l"));
console.log(container.includes("n"));

//Front&Back
const adding = "JavaScript";
console.log("J"+adding+"J");

//Last3chars
//const adding = "JavaScript";
const last = adding.substring(7,10);
console.log(last + adding + last);

//Java
const javi = "Javalin";
console.log(javi.toLocaleUpperCase(),javi.includes("Java"));

//First and Last



//Concatanation
let firstName = "Nadia";
let lastName = "Daruiz";
let middleName = "Yael";
console.log(`${firstName} ${middleName} ${lastName}`);

//capatalize
const fox = "the quick brown fox";
const firstLetter = "t"
console.log(fox.toUpperCase());
