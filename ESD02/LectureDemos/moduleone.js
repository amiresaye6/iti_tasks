// module one
let fname = "Nasr";
//if (true) {
//    let myvar = true;
//    export { myvar };//error
//}
 let namesarr = ["Ahmed", "Mohamed", "Kareem"];
  class Person{
    constructor(_id, _name) {
        this.ID = _id;
        this.Name = _name;
    }
    Print() {
        return `ID = ${this.ID} , Name = ${this.Name}`;
    }
}
 function sum(x, y) {
    return x + y;
}
function sub(x, y) {
    return Math.abs(x - y);
}
function Setfname(_fname) {
    if (_fname.trim().length >= 3)
        fname = _fname;
}
export { sum, sub, Person as Human, namesarr, fname, Setfname }

