// alert("Hello!!");
// console.log('Hello World!!')

//challenge 1: Age in Days

function ageInDays(){
    if(document.getElementById('ageInDays')){
        document.getElementById('ageInDays').remove();
    }
    var birthYear = prompt('What year were you born....?');
    var age = (2025-birthYear)*365;

    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+age+ ' days old...!');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
//     console.log(age);
}

function reset(){
    document.getElementById('ageInDays').remove();
}