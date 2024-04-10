// Spread operator
// let poorCountry = ['Bangladesh', 'Srilanka'];
// let richCountry = [...poorCountry, 'America','China','Canada']
// console.log(richCountry)

// without spread operator
// let poorCountry = ['Bangladesh','Srilanka'];
// let richCountry = ['America','Canda','China'];
// richCountry.push(poorCountry);
// console.log(richCountry)

// Rest parameter
// function show(...numbers){
//     let sum = 0;
//     for(let i of numbers){
//         sum +=i;
//     }
//     console.log(`The sum is ${sum}`)
// }

// show(1,2,3,5);

// Dynamic functions
// var name = function(name){
//     return name;
// }
// console.log(name('Nahid Sultan!'));

// var i;
// for (i=1; i <=10; i++){
//     console.log('Nahid'*i)
// }

// for of loop
// var names = ['nahid','keya','sultan'];
// for (let name of names){
//     console.log(name);
// } 

// while loop

// var fuel = 10;
// while (fuel > 1){
//     console.log('Vroom');
//     fuel -= 1;
// }

// simple for loop

count = 0;
// for (var count =1; count <=6; count++){
//     console.log(count, 'times 6 is', count * 6);
// }

// break 
// for(var count= 1; count <=600; count ++){
//     if (count == 5) break;
//     console.log('Count: ', count);
// }

// continue
// for(var count = 1; count <=10; count++){
//     if (count % 2 == 0) continue;
//     console.log('Count: ', count);
// }

// for in loop
// var computer = { brand: 'Apple', model: 'Macbook pro', ram: 8 };
// for (let props in computer) {
//     console.log(props + ': ' + computer[props]);
// }

// conditon

// var computer = { brand: 'Apple', model: 'MacBook pro', Ram: 8 };
// if (computer['brand'] == 'Apple') {
//     console.log('Compuer brand is Apple');
// } else if (computer['brand'] == 'acer') {
//     console.log('Computer brand is acer');
// }
// else {
//     console.log('Brand not found');
// }

// function
// function sum(a, b) {
//     var c = a + b;
//     console.log(c);
// }
// sum(10, 30);

// rest parameter
// function name(...x) {
//     console.log(x[6]);
// }
// name(1, 2, 3, 4, 5, 6, 7, 8, 9);

// anonymous function
// var myfun = function () {
//     return 'hello';
// }
// console.log(myfun());

// arrow function
// var myfunc = (name) => {
//     console.log(`Hello ${name} you want to became a python developer!`);
// }
// myfunc('Nahid Sultan');

// simple Array
// var myArray = ['a', 'b', 'c', 'd'];
// for (let item of myArray) {
//     console.log(item);
// }

// Map
// var myMap = new Map();
// myMap.set('key1', 'Bangladesh');
// myMap.set('key2', 'India');
// myMap.set('key3', 'China');
// myMap.set('key4', 'Canada');
// myMap.set('key5', 'Australia');

// myMap.delete('key5');
// console.log(myMap.values());

// if (myMap.has('key1')) {
//     console.log('yes');
// } else {
//     console.log('No');
// }

// sets
// var mySet = new Set();
// mySet.add('Bnagladesh');
// mySet.add('India');
// mySet.add('China');
// mySet.add('China');
// mySet.add('Bnagladesh');

// console.log(mySet);

// class
// class FirstClass {
//     func(name) {
//         console.log(`Hello ${name}, Do you know python good?`);
//     }
// }

// var obj = new FirstClass;
// obj.func('Nahid');

// constructor method
// class FirstClass {
//     constructor(name) {
//         console.log(`Hello ${name}, How are you doing?`);
//     }
// }

// new FirstClass('Nahid');

// constructor method with parameter
// class firstClass {
//     constructor(a, b) {
//         this.firstnum = a;
//         this.secondnum = b;
//     }
//     add() {
//         let result = this.firstnum + this.secondnum;
//         console.log(result);
//     }
// }

// var obj = new firstClass(20, 30);
// obj.add();

// static keyword
// class firstClass {
//     static func() {
//         console.log('Hello Programmer');
//     }
// }
// firstClass.func();


// class Inheritance
// class firstClass {
//     func1() {
//         console.log('Hello function 1');
//     }
//     func2() {
//         console.log('Hello function 2');
//     }
// }

// class secondClass extends firstClass {
//     func2() {
//         console.log('hello Programmer');
//     }
// }

// var obj = new secondClass();
// obj.func2();

// super keyword
class firstClass {
    func1() {
        console.log('hello function 1');
    }

    func2() {
        console.log('Hello function 2');
    }
}

class secondClass extends firstClass {
    func3() {
        super.func1();
        super.func2();
    }
}

var obj = new secondClass();
obj.func3();