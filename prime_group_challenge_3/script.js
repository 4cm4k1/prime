//Javascript
var apple = {name:'apple', price:randomNumber(1,9)};
var orange = {name:'orange', price:randomNumber(1,9)};
var banana = {name:'banana', price:randomNumber(1,9)};
var grape = {name:'grape', price:randomNumber(1,9)};

var avgApplePrice = 0;
var avgOrangePrice = 0;
var avgBananaPrice = 0;
var avgGrapePrice = 0;
var applePriceHistory = [];
var orangePriceHistory = [];
var bananaPriceHistory = [];
var grapePriceHistory = [];

var interval = 2000;
// Timeout function
// var timeoutInterval = 300000;
// var timeoutID = window.

var userBal = 100;
var userApple = 0;
var userOrange = 0;
var userBanana = 0;
var userGrape = 0;

$(document).ready(function() {
	refreshDom();
    setInterval(intervalActivity, interval);
    //on click listener from fruit div do stuff
    $("#fruitStand").on("click", ".fruitPanel", function() {
        //grab fruit id
				console.log(this.id);
        //purchase function
				buyFruit(this.id);
    });

		$('#inventoryBalance').on("click", ".inventory", function() {
			console.log('clicked!');
			console.log(this);
			sellFruit(this.id);
		});
		// Timeout function
		// setTimeout(setInterval, timeoutInterval);

});

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function intervalActivity() {
    apple.price = changeFruitPrice(apple);
    orange.price = changeFruitPrice(orange);
    banana.price = changeFruitPrice(banana);
    grape.price = changeFruitPrice(grape);
    refreshDom();
    console.log(apple, orange, banana, grape);
}

function changeFruitPrice(fruit) {
    if (randomNumber(0, 1) === 1) {
        fruit.price += randomNumber(0, 50) / 100;
    } else {
        fruit.price -= randomNumber(0, 50) / 100;
    }
    if (fruit.price < 0.50) {
        fruit.price = 0.50;
    }
    if (fruit.price > 9.99) {
        fruit.price = 9.99;
    }
    return fruit.price;
}
//average price function
function avgPrice(avgPurchasePriceHistory) {
    var sum = 0;
    for (var i = 0; i < avgPurchasePriceHistory.length; i++) {
        sum += avgPurchasePriceHistory.length[i];
    }

    return sum / array.length;
}

//function refreshDom
function refreshDom() {
    $('#applePrice').empty();
    $('#orangePrice').empty();
    $('#bananaPrice').empty();
    $('#grapePrice').empty();

    $('#applePrice').text(makeNumbersIntoMoney(apple.price));
    $('#orangePrice').text(makeNumbersIntoMoney(orange.price));
    $('#bananaPrice').text(makeNumbersIntoMoney(banana.price));
    $('#grapePrice').text(makeNumbersIntoMoney(grape.price));

    $('#averageApplePrice').empty();
    $('#averageOrangePrice').empty();
    $('#averageBananaPrice').empty();
    $('#averageGrapePrice').empty();

    $('#averageApplePrice').text(makeNumbersIntoMoney(avgApplePrice));
    $('#averageOrangePrice').text(makeNumbersIntoMoney(avgOrangePrice));
    $('#averageBananaPrice').text(makeNumbersIntoMoney(avgBananaPrice));
    $('#averageGrapePrice').text(makeNumbersIntoMoney(avgGrapePrice));

		$('#accountBalance').empty();
		$('#accountBalance').text(makeNumbersIntoMoney(userBal));

		$('#appleInventory').empty();
    $('#orangeInventory').empty();
    $('#bananaInventory').empty();
    $('#grapeInventory').empty();

    $('#appleInventory').text(userApple);
    $('#orangeInventory').text(userOrange);
    $('#bananaInventory').text(userBanana);
    $('#grapeInventory').text(userGrape);
}

function buyFruit(fruitID) {
	switch(fruitID) {
		case 'apple':
			if((userBal - apple.price) <= 0) {
				alert('You don\'t have enough money to complete this purchase.');
				return;
			}
			userApple++;
			userBal -= apple.price;
			applePriceHistory.push(apple.price);
			avgApplePrice = avgPrice(applePriceHistory);
			break;
		case 'orange':
			if((userBal - orange.price) <= 0) {
				alert('You don\'t have enough money to complete this purchase.');
				return;
			}
			userOrange++;
			userBal -= orange.price;
			orangePriceHistory.push(orange.price);
			avgOrangePrice = avgPrice(orangePriceHistory);
			break;
		case 'banana':
			if((userBal - banana.price) <= 0) {
				alert('You don\'t have enough money to complete this purchase.');
				return;
			}
			userBanana++;
			userBal -= banana.price;
			bananaPriceHistory.push(banana.price);
			avgBananaPrice = avgPrice(bananaPriceHistory);
			break;
		case 'grape':
			if((userBal - grape.price) <= 0) {
				alert('You don\'t have enough money to complete this purchase.');
				return;
			}
			userGrape++;
			userBal -= grape.price;
			grapePriceHistory.push(grape.price);
			avgGrapePrice = avgPrice(grapePriceHistory);
			break;
	}
	refreshDom();
}

function sellFruit(fruitID) {
	switch(fruitID) {
		case 'sellApple':
			if(userApple === 0) {
				alert('You don\'t have any ' + apple.name + 's to sell.');
				return;
			}
			userApple--;
			userBal += apple.price;
			break;
		case 'sellOrange':
			if(userOrange === 0) {
				alert('You don\'t have any ' + orange.name + 's to sell.');
				return;
			}
			userOrange--;
			userBal += orange.price;
			break;
		case 'sellBanana':
			if(userBanana === 0) {
				alert('You don\'t have any ' + banana.name + 's to sell.');
				return;
			}
			userBanana--;
			userBal += banana.price;
			break;
		case 'sellGrape':
			if(userGrape === 0) {
				alert('You don\'t have any ' + grape.name + 's to sell.');
				return;
			}
			userGrape--;
			userBal += grape.price;
			break;
	}
	refreshDom();
}

function avgPrice(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum / array.length;
}

function makeNumbersIntoMoney(number) {
	var localeString = 'en-US';
	var currencyObject = {style:'currency',currency:'USD'};

	return number.toLocaleString(localeString, currencyObject);
}
