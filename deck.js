
var numbers = ['ace', '2', '3', '4', '5','6','7', '8', '9', '10', 'Jack'];

var suits = ['hearts', 'clubs', 'spades', 'diamonds'];

var deck = [];


suits.forEach(function(suit) {
	numbers.forEach(function(number){
		var final = number +=  (" of " + suit);
		deck.push(final);
		});

});
