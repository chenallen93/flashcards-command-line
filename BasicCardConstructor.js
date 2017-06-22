var inquirer = require('inquirer');

var cardData = require('./basicCards.json');
var fs = require('fs');


function BasicCard(frontSide,backSide){
	this.front = frontSide;
	this.back = backSide;
}

function createNewCard(){
	inquirer.prompt([{
		type: 'input',
		name: 'frontSide',
		message: 'What is the question you want to ask?'
	},{
		type: 'input',
		name: 'backSide',
		message: 'What is the answer to the above question?'
	}]).then(function(inputs){
		var card = new BasicCard(inputs.frontSide,inputs.backSide);
		cardData.push(card);

		var newCardData = JSON.stringify(cardData,null,'\t');
		fs.writeFile('./basicCards.json', newCardData,function(err){
			if(err)throw err;
			console.log('done');
		})
		
	})
}
createNewCard();

