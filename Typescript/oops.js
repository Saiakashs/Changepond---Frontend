"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(id, name, addr) {
        //data-members
        this.pid = 101;
        this.pname = "Akash";
        this.paddress = "Tirunelveli";
        this.pid = id;
        this.pname = name;
        this.paddress = addr;
    }
    //member-functions
    Person.prototype.personDetails = function () {
        console.log("ID:".concat(this.pid, " Name:").concat(this.pname, " Address:").concat(this.paddress));
    };
    return Person;
}());
exports.default = Person;
// let personObj1=new Person(101,"Akash","Tirunelveli");
// personObj1.personDetails();
// let personObj2=new Person(101,"Arun","Pondichery");
// personObj2.personDetails();
// console.log(personObj.pid);
// console.log(personObj.pname);
// console.log(personObj.paddress);
