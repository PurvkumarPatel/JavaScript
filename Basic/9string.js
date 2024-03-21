const name = "patel";
const repocount = 50;
console.log(typeof name);
console.log(name + repocount + " Kaik che"); // bad way

// string interpolation using template literals
console.log(`hello my name is ${name} and my repo count is ${repocount} okay`); // here use backtickes(`) not (') this

const namo = new String("modi-he");
console.log(typeof namo);
console.log(namo);
console.log(namo[2]);
console.log(namo.charAt(2));//d no use of -ve indexing
console.log(namo.at(-2)); //h in this also use -ve 

console.log(namo.charCodeAt(2));//100 return UTF-16 code

console.log(namo.__proto__);
console.log(namo.length);
console.log(namo.toUpperCase()); // dont change original value as it use stack memory - primitive type
console.log(namo.charAt(2));
console.log(namo.indexOf("o"));

const newstr = namo.substring(0,4); // not include last 4 in substring will be 0 1 2 3 index value
console.log(namo.substr(4,3));//here second parameter is length
console.log(newstr);

const slicingstr = namo.slice(-3,-2); // it start from reverse
console.log(slicingstr);

const trim = new String("  modi-he  ");
console.log(trim.trim()); // it remove white space

const url = "https://google.com/sdas&2sd&2s"
console.log(url.replace('&2','-')); //only replace firts match also u can use /i for text insensitive and /g for replace all
console.log(url.replace(/&2/g,"okay"));
// also use replaceAll
console.log(url.includes('google'));

const dashed = "sfb-fh-fn";
console.log(dashed.split("-",2));//second is limit of elements

console.log(namo.concat(dashed)); //modi-hesfb-fh-fn

// visit all string functions
let padded = namo.padStart(15,"0")
console.log(padded); //add padding also use padEnd

console.log(padded.repeat(2));//repeat string