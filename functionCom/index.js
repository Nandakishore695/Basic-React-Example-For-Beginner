function add(a, b) {
    console.warn(a + b);
}
add(1, 1);
var num = 12;
num = "sfs";
var names = "Kamal";
var istrue = true;
console.log(num, names, istrue);
function dummy(a) {
    return (a);
}
var result = dummy("Yes, dummy");
console.log(result);
var data = 10;
data = "num";
var anyNumber = 777;
var person = {
    name: "MITUN",
    age: 34,
    email: "mitundas@mailjoin.com",
    address: "ameerpet x road"
};
console.log(person.address.toUpperCase());
console.log(person.name.toLowerCase());
console.log(person.name.toLowerCase());
console.log(person.email.split("i"));
console.log(person.address.indexOf("x"));
var user = {
    name: "MITUN",
    age: 34,
    email: "mitundas@mailjoin.com",
    address: "ameerpet x road"
};
console.log(person.address.concat(" beside hmda."));
var arrayNameList = ["Ranu", "Pondu", "Rava"];
console.log(arrayNameList);
var random = ["Typescript", 134, true];
console.log(random);
function addTwo(num) {
    return num;
}
addTwo(7);
function logInDetails(name, email, isPaid) {
}
logInDetails("hp", "hp@com", true);
var singUp = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
singUp("hd", "hed@gmail.com");
function valueStore(name) {
    return "";
}
function consoleError(errorSmg) {
    console.log(errorSmg);
}
consoleError("dfdsdklf");
var userInformation = {
    name: "Natspa",
    email: "natsap@mail.com",
    phone: 12345678
};
function userIndentiyTwo(values) {
    return values;
}
userIndentiyTwo("d");
function userIndentiyOne(values) {
    return values;
}
userIndentiyOne(10);
function userIndentiy(values) {
    return values;
}
userIndentiy(6);
var userMoreIndentiy = function (product) {
    return product[3];
};
var yoour = /** @class */ (function () {
    function yoour() {
        this.firstName = "ANIL";
    }
    yoour.prototype.getFirstName = function () {
        console.log(this.firstName);
    };
    yoour.prototype.getLastName = function () {
    };
    return yoour;
}());
var results = new yoour();
results.getFirstName();
