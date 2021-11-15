"use strict";
exports.__esModule = true;
/*EXPICIT TYPES*/
//* Basic Types
var id = 5;
var company = 'ITR VN';
var isPublished = true;
var x = 'Hello';
var ids = [1, 2, 3, 4, 5];
var arr = [1, true, 'Hello'];
//ANY TYPES:
var variable;
variable = 10;
variable = 'Hello';
variable = { a: '1', b: '2' };
variable = [1, 3];
// console.log('variable: ', variable)
var mixed = [];
mixed.push(5);
mixed.push('abc');
mixed.push(true);
mixed.push({ a: '1', b: '2' });
// console.log('mixed: ', mixed)
//* Union
var pid;
pid = '22';
//* Array
var countries = ['Vietnam', 'Laos', 'Cambodia'];
countries.push('U.S');
// countries.push(10)
// countries.push(false)
//* Objects
var person = {
    name: 'Thanh',
    age: 23,
    isStudent: false
};
//person.name = 5
person.name = 'Thanh dep trai';
//person.age = 'Thanh
person.age = 23;
// person.hobbies = 30
//* Objects
person = {
    name: 'Cuong',
    age: 25,
    isStudent: false
};
