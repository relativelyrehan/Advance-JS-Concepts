let name1 = {
    firstName: 'John',
    lastName: 'Doe',
};

let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " FROM " + hometown + " STATE: " + state);
}

Function.prototype.mybind = function (...args) {
    let obj = this
    console.log(obj)
    let params = args.slice(1)
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printName = printFullName.bind(name1, 'Heathrow', 'London');

let printName2 = printFullName.mybind(name1, 'Kashi', 'Uttarakhand')

printName();

printName2();