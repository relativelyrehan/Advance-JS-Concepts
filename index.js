/*

params: 

1. object to be referenced,
2. other parameters needed in the function

call()

*/

const printFullName = function (hometown) {
    console.log(this.firstName + " " + this.lastName + " From: " + hometown);
    return
}

const name1 = {
    firstName: 'John',
    lastName: 'Doe',
};

const name2 = {
    firstName: 'Jaden',
    lastName: 'Smith'
};


/*
@@@

With call function, we can point the reference to this 
`this` will now point to the name2

*/

printFullName.call(name2, 'New York'); // We can pass more arguments like this by seperating with `,`
printFullName.call(name1, 'London')

/*

apply()

The only difference is we pass the arguments in an array, with the 
first argument being the reference object itself

*/

printFullName.apply(name1, ['New York'])


/*

bind()

gives you a copy of a function that can be used later

returns a function that can be invoked later

*/

let printMyName = printFullName.bind(name1, 'Berlin');

// typeof printMyName is function()


console.log(typeof printMyName);

printMyName();