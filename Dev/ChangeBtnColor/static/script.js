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

//challenge 2
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('img-flexbox');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    // image.width = "250px";
    div.appendChild(image);
}

//challenge 3: Rock, paper, scissors

function rpsGame(yourChoice){
    console.log(yourChoice);
    console.log(yourChoice.src);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    let options = ['rock', 'paper', 'scissor']
    
    botChoice =options[Math.floor(Math.random() * 3)];
    console.log(botChoice);
    
    results = decide(humanChoice, botChoice); //[1,0] human won bot lost
    console.log(results);
    
    message = finalMessage(results); 
    console.log(message);
    //sample output of above func: 
    //('message': 'You Won!', 'color': 'green')
    // message could be: You Won! You Lost! You Tied!

    rpsFrontEnd(humanChoice, botChoice, message);
}

function rpsFrontEnd(humanChoice, botChoice, message){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }

    //lets remove all images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var msgDiv=document.createElement('div');

    humanDiv.innerHTML="<img id='human' height='150px' width='150px' src='"+imageDatabase[humanChoice]+"' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    botDiv.innerHTML="<img id='bot' height='150px' width='150px' src='"+imageDatabase[botChoice]+"' style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
    msgDiv.innerHTML="<h1 id='msg' style='color: "+message['color']+"; font-size: 60px; padding: 30px; '>"+message['message']+"</h1>";
    
    document.getElementById('flex-box-3').appendChild(humanDiv);
    document.getElementById('flex-box-3').appendChild(msgDiv);
    document.getElementById('flex-box-3').appendChild(botDiv);
}

function RPSreset(){
    // location.reload();
    document.getElementById('human').remove();
    document.getElementById('bot').remove();
    document.getElementById('msg').remove();

    var opt1=document.createElement('div');
    var opt2=document.createElement('div');
    var opt3=document.createElement('div');

    opt1.innerHTML="<img id='rock' onclick='rpsGame(this)' width='150px' height='150px' src='https://atlas-content-cdn.pixelsquid.com/stock-images/rock-stone-AvXzl49-600.jpg' alt='Rock'>";
    opt2.innerHTML="<img id='paper' onclick='rpsGame(this)' width='150px' height='150px' src='https://cdn.pixabay.com/photo/2016/10/23/15/47/paper-1763262_640.png' alt='Paper'>";
    opt3.innerHTML="<img id='scissor' onclick='rpsGame(this)' width='150px' height='150px' src='https://img.freepik.com/free-vector/cute-scissors-kawaii_24877-82375.jpg' alt='Scissors'>";
    
    document.getElementById('flex-box-3').appendChild(opt1);
    document.getElementById('flex-box-3').appendChild(opt2);
    document.getElementById('flex-box-3').appendChild(opt3);
}

function finalMessage(results){

    var messageCounter = {
        1: {'message': 'You Won!', 'color': 'green'},
        0: {'message': 'You Lost!', 'color': 'red'},
        0.5: {'message': 'You Tied!', 'color': 'yellow'}
    }

    return messageCounter[results[0]];
}

function decide(humanChoice, botChoice){
    var rpsDatabase = {
        'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'scissor': 0, 'rock': 1, 'paper': 0.5},
        'scissor': {'scissor': 0.5, 'rock': 0, 'paper': 1}
    }

    var yourScore = rpsDatabase[humanChoice][botChoice];
    var botScore = rpsDatabase[botChoice][humanChoice];

    return [yourScore, botScore];
}

//challenge 4:change btn colors
var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);
var copyOfAllButtons = [];

for(let i=0;i<all_buttons.length;i++){
    copyOfAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyOfAllButtons);

function buttonColorChange(btn_thing){
    if(btn_thing.value=='red'){
        buttonRed();
    }
    else if(btn_thing.value=='green'){
        buttonGreen();
    }
    else if(btn_thing.value=='reset'){
        buttonReset();
    }
    else if(btn_thing.value=='random'){
        buttonRandom();
    }
}

function buttonRed(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonReset(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyOfAllButtons[i]);
    }
}

function buttonRandom(){
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for(let i=0;i<all_buttons.length;i++){
        var num = Math.floor(Math.random()*4);
        console.log(num);
        
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[num]);
    }
}


//Challenge 5: BlackJack Game
let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1,11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lostSound = new Audio('static/sounds/aww.mp3');

document.getElementById('blackjack-stand-button').disabled = true;
document.getElementById('blackjack-stand-button').style.opacity = 0.5;
document.getElementById('blackjack-deal-button').disabled = true;
document.getElementById('blackjack-deal-button').style.opacity = 0.5;

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);
document.querySelector('#blackjack-stand-button').addEventListener('click', blackjackStand);

function blackjackHit(){
    // alert('Ouch, you just clicked me!');
    if(YOU['score']<21){
        let card=randomCard();
        showCard(YOU, card);
        updateScore(YOU, card);
        showScore(YOU);
        // console.log(YOU['score']);
    }

    if(YOU['score']>0){
        document.getElementById('blackjack-stand-button').disabled = false;
        document.getElementById('blackjack-stand-button').style.opacity = 1;
    }
}

function randomCard(){
    let randomIndex=Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(activePlayer, card){
    if(activePlayer['score']<=21){
        let cardImage = document.createElement('img');
        // cardImage.src = 'static/images/'+card+'.png';
        cardImage.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function updateScore(activePlayer, card){
    //if adding 11 keeps me below 21 then add 11 else 1
    if(card=='A'){
        if(activePlayer['score']+blackjackGame['cardsMap'][card][1]<=21){
            activePlayer['score']+=blackjackGame['cardsMap'][card][1];
        }
        else{
            activePlayer['score']+=blackjackGame['cardsMap'][card][0];
        }
    }
    else{
        activePlayer['score']+=blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer){
    if(activePlayer['score']>21){
        document.querySelector(activePlayer['scoreSpan']).innerHTML = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else{
        document.querySelector(activePlayer['scoreSpan']).innerHTML=activePlayer['score'];
    }
}

async function blackjackStand(){
    // alert('Ouch, you just clicked me!');
    document.getElementById('blackjack-hit-button').disabled = true;
    document.getElementById('blackjack-hit-button').style.opacity = 0.5;
    
    while(DEALER['score']<16){
        let card=randomCard();
        showCard(DEALER, card);
        updateScore(DEALER, card);
        showScore(DEALER);
        await sleep(750);
    }

    let winner=computeWinner();
    showResult(winner);

    // Disable Hit and Stand buttons
    document.getElementById('blackjack-hit-button').disabled = true;
    document.getElementById('blackjack-stand-button').disabled = true;
    // Optionally, you can visually grey them out too
    document.getElementById('blackjack-hit-button').style.opacity = 0.5;
    document.getElementById('blackjack-stand-button').style.opacity = 0.5;

    //Enabling Deal
    document.getElementById('blackjack-deal-button').disabled = false;
    document.getElementById('blackjack-deal-button').style.opacity = 1;

    // showResult(computeWinner());
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


//compute winner and return who won
//update the wins, draws and losses
function computeWinner(){
    let winner;

    if(YOU['score']<=21){
        //condition: higher score than dealer or when dealer busts but you're 21 or under
        if(YOU['score']>DEALER['score'] || DEALER['score']>21){
            blackjackGame['wins']++;
            winner=YOU;
        }
        else if(YOU['score']<DEALER['score']){
            blackjackGame['losses']++;
            winner=DEALER;
        }
        else if(YOU['score']==DEALER['score']){
            blackjackGame['draws']++;
        }
    }
    //you bust but dealer doesn't
    else if(YOU['score']>21 && DEALER['score']<=21){
        blackjackGame['losses']++;
        winner=DEALER;
    }
    //when both busts
    else if(YOU['score']>21 && DEALER['score']>21){
        blackjackGame['draws']++;
    }

    return winner;
}

function showResult(winner){
    if(winner==YOU){
        document.querySelector('#blackjack-result').textContent='You Won!';
        document.querySelector('#blackjack-result').style.color = 'green';
        document.querySelector('#wins').textContent = blackjackGame['wins'];
        winSound.play();
    }
    else if(winner==DEALER){
        document.querySelector('#blackjack-result').textContent='You Lost!';
        document.querySelector('#blackjack-result').style.color = 'red';
        document.querySelector('#losses').textContent = blackjackGame['losses'];
        lostSound.play();
    }
    else{
        document.querySelector('#blackjack-result').textContent='You Drew!';
        document.querySelector('#draws').textContent = blackjackGame['draws'];
        // winSound.play();
    }
}

function blackjackDeal(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    
    for(let i=0;i<yourImages.length;i++){
        yourImages[i].remove();
    }

    for(let i=0;i<dealerImages.length;i++){
        dealerImages[i].remove();
    }

    YOU['score']=0;
    DEALER['score']=0;
    document.querySelector(YOU['scoreSpan']).innerHTML=0;
    document.querySelector(YOU['scoreSpan']).style.color = 'white';
    document.querySelector(DEALER['scoreSpan']).innerHTML=0;
    document.querySelector(DEALER['scoreSpan']).style.color = 'white';
    


    document.querySelector('#blackjack-result').innerHTML = "Let's Play";
    document.querySelector('#blackjack-result').style.color = 'black';
    
    
    // Re-enable Hit and Stand buttons
    document.getElementById('blackjack-hit-button').disabled = false;
    document.getElementById('blackjack-deal-button').disabled = true;
    // Reset button appearance
    document.getElementById('blackjack-hit-button').style.opacity = 1;
    document.getElementById('blackjack-deal-button').style.opacity = 0.5;
    
    
    // blackjackGame['wins']=0;
    // blackjackGame['losses']=0;
    // blackjackGame['draws']=0;

    // document.querySelector('#wins').textContent = blackjackGame['wins'];
    // document.querySelector('#losses').textContent = blackjackGame['losses'];
    // document.querySelector('#draws').textContent = blackjackGame['draws'];
}