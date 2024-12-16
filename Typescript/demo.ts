console.log("welcome You All To Typescript");

//string data type

let fname:string;
fname="Akash";

let lname:string="S";
console.log(`First Name:${fname} Last Name:${lname}`);

//number data type

let num1:number=200,num2:number=0.5,num3:number=123456;
console.log(num1,num2,num3);

//boolean

let cond1:boolean=true,cond2:boolean=false;
console.log(cond1,cond2);

//array

let courses1:string[]=["HTML","CSS","Javscript","React"];

//you also define array like this

let courses2:Array<string>=["HTML","CSS","Javscript","React"];

//tuple

let product:[number,string,boolean]=[100,"Mango",true];

//enum

enum days1{sun,mon,tue,wed,thrs,fri,sat}
let data1=days1.sun;
console.log(data1);

enum days2{sun=501,mon,tue,wed,thrs,fri,sat}
let data2=days2.sun;
console.log(data2);

//union

let infoi:number | string | boolean = true;

//any

let mix:any="Akash";

function task(fname,lname){
    return `FullName:${fname} ${lname}`;
}
console.log(task("Sai Kutthalingam","S"));

function areaofcircle(radius){
    return 3.14*(radius**2);
}

console.log(areaofcircle(3));
