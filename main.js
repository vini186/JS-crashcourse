// console.log('hello world');
// console.error('this is an error');
// console.warning('this is a warning');

//let, const, var
//  let age=30;
//  age=31;
//   console.log(age);

// let score ;

//  score=10;
//    console.log(score);

//strings,numbers,boolean, null ,undefined

 //const name= 'john';
 //const age = 30;
// const isCool = true;
// const rating = 4.5;
// const x = null;
// let z;
// console.log(typeof x);

//concatenation
//  console.log('my name is '+ name+' my age is '+age+' years.');

//  // template string
//  const hello = `my name is ${name} & my age is${age} years`;

//  console.log(hello);

 //const s= 'hello..';
//const s= 'tech,computer,it,for';
// console.log(s.length);
//console.log(s.toUpperCase());
//console.log(s.substring(0,3).toUpperCase());
//console.log(s.split(''));

//array

//const numbers = new Array(1,2,3,4,5,6);

// const fruits = ['apples','oranges','peach'];
// fruits[3]='grapes';

// fruits.push('mangoes');
// fruits.unshift('strawberry');
// fruits.pop();
// console.log(fruits);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray('hello'));
// console.log(fruits.indexOf('peach');

// const person = {
//     firstName: 'john',
//     lastName: 'deo',
//     age: 30,
//     hobbies: ['music','movies','sports'],
//     address: {
//         street: '50 main st',
//         city:'boston',
//         state: 'ma'
//     }
// }
 
// console.log(person);
// console.log(person.firstName);
// console.log(person.hobbies[1]);

// const {firstName, lastName , address: {city}}= person;
// person.email = 'john@gmail.com';
// console.log(person);


const todos = [
    {
        id:1,
        text:'take out trash',
        isCompleted: true
    },
    {
        id:2,
        text:'make out trash',
        isCompleted: true
    },
    {
        id:3,
        text:'set out trash',
        isCompleted: false
    }
];

//console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todos);


//while
// let i=0;
// while(i<10){
//     console.log(`while loop number: ${i}`);
//     i++;
// }

//for
// for(let i=0; i< todos.length; i++) {
//     console.log(todos[i].text);
//  }
// for(let todo of todos){
//     console.log(todo.id);
// }

//forEach, map, filter
// todos.forEach(function(todo){
//     console.log(todo.id);
// });

// const todoId= todos.map(function(todo){
//         return todo.id;
//  });

//  console.log(todoId);
//   const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }) .map(function(todo){
//     return todo.text;
// });

// console.log(todoCompleted);


// const x=5;
// if (x===10){
//     console.log('x is 10');
// }else if(x > 10){
//     console.log('x is greater than 10');
// }
// else {
//     console.log('x is less than 10');
// }


// const x=6;
// const y=11;

// if(x>5 && y>10){
//     console.log('x is more than 5 and y is less than 10 ');
// }

// const x=11;
// const color= 'green';

// //console.log(color);

// switch(color){
//     case'red':
//     console.log('color is red');
//     break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is neither red nor blue');
//         break;

// }

// const addNums = (num1=4, num2=1) => {
//   return num1 +num2;
// }

//  console.log(addNums(5,7));  


//  function Person(firstName,lastName,dob){
//      this.firstName=firstName;
//      this.lastName=lastName;
//      this.dob= new Date (dob);
   
    
//  }

//  Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }
//  Person.prototype.getFullName = function(){
//      return `${this.firstName}${this.lastName}`;
//  }
//class

// class Person {
//  constructor(firstName,lastName,dob){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.dob= new Date (dob);
//  }
//  getBirthYear(){
//     return this.dob.getFullYear();
//  }
//  getFullName(){
//     return `${this.firstName}${this.lastName}`;
//  }
// }

//  //instantiate object
//  const person1 =new Person('john','deo','5-7-1998');
//  const person2 =new Person('deo','mary','5-7-2000');

//  console.log(person2);







