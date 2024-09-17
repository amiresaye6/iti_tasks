// module two
// import
//import human,{ namesarr, fname as hamadaname } from './moduleone.js';
let  fname = "Ibraheem";
//namesarr.forEach((_n) => { console.log(_n); });
//let pone = new human(100, "Ahmed - Person");
//console.log(pone.Print());
//document.getElementsByTagName('p')[0].innerText = "Test";
//console.log(fname);//ibraheem
//console.log(hamadaname);//ibraheem

import * as myobj from './moduleone.js';
myobj.namesarr.forEach((_n) => { console.log(_n); });
let pone = new myobj.Human(100, "Ahmed - Person");
myobj.Setfname("moustafa");
console.log(`Fname Of Moduele one = ${myobj.fname}`);
//export { myobj.Human as student };
