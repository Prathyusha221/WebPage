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

    humanDiv.innerHTML="<img height='150px' width='150px' src='"+imageDatabase[humanChoice]+"' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    botDiv.innerHTML="<img height='150px' width='150px' src='"+imageDatabase[botChoice]+"' style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
    msgDiv.innerHTML="<h1 style='color: "+message['color']+"; font-size: 60px; padding: 30px; '>"+message['message']+"</h1>";
    
    document.getElementById('flex-box').appendChild(humanDiv);
    document.getElementById('flex-box').appendChild(msgDiv);
    document.getElementById('flex-box').appendChild(botDiv);
}

function reset(){
    location.reload();
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