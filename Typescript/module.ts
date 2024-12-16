//import { Person } from "./oops";

import Person from "./oops";

class Company extends Person{
    cName:string;
    empContact:number;
    empPost:string;

    constructor(id:number,name:string,addr:string,compname:string,econtact:number,epost:string){
        super(id,name,addr);
        this.cName=compname;
        this.empContact=econtact;
        this.empPost=epost;
    }

    personDetails(){
        console.log(`EmpID:${this.pid} EmpName:${this.pname} Post:${this.empPost} Company:${this.cName} Address:${this.paddress} Contact:${this.empContact}`);
    }
}

let companyObj=new Company(101,"Akash","Tirunelveli","Changepond",9360335100,"Full Stack Developer");
companyObj.personDetails();