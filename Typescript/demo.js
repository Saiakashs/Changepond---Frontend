console.log("welcome You All To Typescript");
//string data type
var fname;
fname = "Akash";
var lname = "S";
console.log("First Name:".concat(fname, " Last Name:").concat(lname));
//number data type
var num1 = 200, num2 = 0.5, num3 = 123456;
console.log(num1, num2, num3);
//boolean
var cond1 = true, cond2 = false;
console.log(cond1, cond2);
//array
var courses1 = ["HTML", "CSS", "Javscript", "React"];
//you also define array like this
var courses2 = ["HTML", "CSS", "Javscript", "React"];
//tuple
var product = [100, "Mango", true];
//enum
var days1;
(function (days1) {
    days1[days1["sun"] = 0] = "sun";
    days1[days1["mon"] = 1] = "mon";
    days1[days1["tue"] = 2] = "tue";
    days1[days1["wed"] = 3] = "wed";
    days1[days1["thrs"] = 4] = "thrs";
    days1[days1["fri"] = 5] = "fri";
    days1[days1["sat"] = 6] = "sat";
})(days1 || (days1 = {}));
var data1 = days1.sun;
console.log(data1);
var days2;
(function (days2) {
    days2[days2["sun"] = 501] = "sun";
    days2[days2["mon"] = 502] = "mon";
    days2[days2["tue"] = 503] = "tue";
    days2[days2["wed"] = 504] = "wed";
    days2[days2["thrs"] = 505] = "thrs";
    days2[days2["fri"] = 506] = "fri";
    days2[days2["sat"] = 507] = "sat";
})(days2 || (days2 = {}));
var data2 = days2.sun;
console.log(data2);
//union
var infoi = true;
//any
var mix = "Akash";
function task(fname, lname) {
    return "FullName:".concat(fname, " ").concat(lname);
}
console.log(task("Sai Kutthalingam", "S"));
function areaofcircle(radius) {
    return 3.14 * (Math.pow(radius, 2));
}
console.log(areaofcircle(3));
