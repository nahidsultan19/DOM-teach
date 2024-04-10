// function hello() {
//     for (let i = 0; i < 10; i++){
//         console.log(i);
//     }
// }
// hello();

// const square = number => number * number;
// console.log(square(3));

// const jobs = [
//     { id: 1, isActive: true },
//     { id: 2, isActive: true },
//     { id: 3, isActive: false },
// ];
// const activeJobs = jobs.filter(job => job.isActive);
// console.log(activeJobs);

// const person = {
//     talk() {
//         setTimeout(()=> {
//             console.log('this', this);
//         }, 1000);
//     }
// }
// person.talk();

// const colors = ['red', 'green', 'blue'];
// const items = colors.map((color) => `<li>${color}</li>`);
// console.log(items);

// const first = [1, 2, 3];
// const second = [4, 5, 6];
// const combined = [...first,'a', ...second];
// console.log(combined);

// class Person{
//     constructor(name) {
//         this.name = name;
//     }
//     walk() {
//         console.log('walk');
//     }
// }

// class Teacher extends Person{
//     constructor(name, degree) {
//         super(name);
//         this.degree = degree;
//     }
//     teach() {
//         console.log('teach');
//     }
// }
// const teacher = new Teacher('Nahid', 'MSc');
// console.log(teacher.walk);

// var count = 1;


// balls = {
//     'golf': 'Golf ball',
//     'tennis': 'Tennis ball',
//     'ping': 'Ping pong ball'
// };
// for (ball in balls){
//     console.log(`${ball} = ${balls[ball]}`);
// }

// var fuel = 1;
// while (fuel < 10) {
//     console.log(fuel, 'Vroom');
//     fuel += 1;
// }

// var count = 1;
// for (var count = 1; count <= 10; count++){
//     console.log(`${count} times 6 is ${count * 6}`);
// }

// for (count = 1; count <= 600; count++){
//     if (count == 5) break;
//     console.log(`Count: ${count}`);
// }

// for (var count = 1; count <= 10; count++){
//     if ((count % 2) == 0) continue;
//     console.log(`Count ${count}`);
// }

try {
    x = y + 1;
    console.log(x)
}
catch (erval) {
    console.log('Oops - Sorry');
    console.log(erval);
}
finally {
    console.log('Allways runs');
}