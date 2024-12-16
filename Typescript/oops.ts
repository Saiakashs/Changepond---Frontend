class Person{
    //data-members

    pid:number=101;
    pname:string="Akash";
    paddress:string="Tirunelveli";

    constructor(id:number,name:string,addr:string){
        this.pid=id;
        this.pname=name;
        this.paddress=addr;
    }

    //member-functions

    personDetails(){
        console.log(`ID:${this.pid} Name:${this.pname} Address:${this.paddress}`);
    }
}

export default Person;


// let personObj1=new Person(101,"Akash","Tirunelveli");
// personObj1.personDetails();
// let personObj2=new Person(101,"Arun","Pondichery");
// personObj2.personDetails();


// console.log(personObj.pid);
// console.log(personObj.pname);
// console.log(personObj.paddress);



