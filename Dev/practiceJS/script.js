console.log('Hello');
// alert('Enter to DOM');

document.getElementById('someText').innerHTML='Hello Hi There!!!';


//objects
//dictionaries in js
let student={
    first: "N",
    last: "Prathyu",
    age: 22,
    height: 150,
    studentInfo: function(){
        return this.first+this.last;
    }
};

console.log(student.last);
student.first = "Jumbo";
console.log(student.first, student.last);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

if(~(student.age>35)){
    console.log("my ppl");
}

//switch statements
//differentiate b/w weekday and weekend
//day 0-> sun
//day 6 -> sat
let day=5;
switch(day){
    case 0:
        text = 'weekend';
        break;
    case 5:
        text='weekend';
        break;
    case 6:
        text='weekend';
        break;
    default:
        text='weekday';
}
console.log("Day "+day+" is a "+text);

//Array
// let arr = [1,2,3];
// let arr1=new Array(1,2,3);
// console.log(arr);
// console.log(arr1);
// console.log('Array to String form: ',arr.toString());
// console.log(arr.join(' - '));
// console.log(arr.pop(),arr);
// console.log(arr.push(4), arr);
// console.log(arr);
// arr[3]=5; //same as push
// console.log(arr);
// arr.shift(); // removes first elem of array
// //shift is costly operation
// console.log(arr);
// arr.unshift(0); //add an elem to first of an array
// console.log(arr);
// let arr2=arr.concat(arr1);
// console.log(arr2);
// console.log(arr2.slice(1,4));
// console.log(arr2.reverse());
// console.log(arr2.sort());
// console.log(arr2.sort(function(a,b){return a-b})); //asc order
// console.log(arr2.sort(function(a,b){return b-a})); //desc order
// console.log(arr2);

// let emptyArr=new Array();
// for(let num=0;num<5;num++){
//     emptyArr.push(num);
// }
// console.log(emptyArr);



//strings
// let fruit = 'apple';
// let moreFruits = 'banana\napple';
// console.log(moreFruits);
// console.log(fruit.length);
// console.log(fruit.indexOf('p'));
// console.log(fruit.indexOf('ple'));
// console.log(moreFruits.slice(4,10));
// console.log(fruit.replace('pp','ppp'));
// console.log(fruit.toUpperCase());
// console.log(fruit.charAt(4));
// console.log(fruit[0]);
// console.log(moreFruits.split('a'));


// var age = prompt('What is your Age...?');
// console.log('Age entered is '+age);
//document.getElementById('age_val').textContent= age;



// function greet(){
//     var name = prompt('Enter your name...');
//     console.log('Hello '+name);
// }

// greet();



//func with arguments
// function greeting(name){
//     console.log('Hello Hi '+name);   
// }

// greeting('Bunny');



// let names={first: 'Jane', last: 'Doe'}; //object
// let fruits=['apple', 'banana','orange']; //array
// let random; //undefined
// let nullVal=null;
// console.log(nullVal);
// console.log(random);