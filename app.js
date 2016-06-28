//  car records array
var carList = [];

var randomCarList = [];

randomCarList[0] = new Car ('Ford', 'Bronco', '1994', 'White', '1', '1000000');
randomCarList[1] = new Car ('Nissan', 'Juke', '2012', 'Pearl', '5', '16000');
randomCarList[2] = new Car ('Honda', 'Fit', '2013', 'Metallic Gray', '5', '18000');
randomCarList[3] = new Car ('Ford', 'Fusion', '2013', 'Silver', '2', '20000');
randomCarList[4] = new Car ('Honda', 'Accord', '2001', 'Firepepper Red Pearl', '4', '2000');

//  Constructor function for car records
function Car(make, model, year, carColor, customerRating, price) {
 this.make = make;
 this.model = model;
 this.year = year;
 this.carColor = carColor;
 this.customerRating = customerRating;
 this.price = price;
}

//  HARD MODE: random car array

$(function(){
  //  Event listener for form submission
  $("main").on("submit", function(event) {
    event.preventDefault();
    //  Form handler function called
    var tempMake = $("#make").val();
    var tempModel = $("#model").val();
    var tempYear = $("#year").val();
    var tempCarColor = $("#carColor").val();
    var tempCustomerRating = $("#customerRating").val();
    var tempPrice = $("#price").val();
    //  Constructor function called
    var tempCar = new Car(tempMake, tempModel, tempYear, tempCarColor, tempCustomerRating, tempPrice);
    carList.push(tempCar);
    refreshDOM();
      //  refreshDOM function called
      //  color indicator update function called
        //  HARD MODE: alphabet sort function called
        //  PRO MODE: update price total function called
  });

  //  Event listener for record deletion
  $("main").on('click', '#delete', function(){

    //What we were doing
    removeCar($(this).parent());

    // console.log(thingYouClick);

    // removeCar(this);
    //  Remove records function called
      //  refreshDOM function called
        //  color indicator update function called
        //  HARD MODE: alphabet sort function called
        //  PRO MODE:  update price total function called
  });

  $("main").on('click', '#randomCar', function() {
    randomCar();
    refreshDOM();
  });
});

//  Form handler function

//  Function that clears the DOM and appends the contents of the records array
function refreshDOM(){
  var $el = $("#vehicleOutput");
  $el.empty();
  for (var i = 0; i < carList.length; i++) {
    $el.append('<div></div>');
    $el.children().last().append('<h3>Car #<span id="carNumber">' + (i+1) + '</span>: ' + carList[i].make + ' ' + carList[i].model + '</h3><ul class="list-group"><li class="list-group-item">Year: ' + carList[i].year + '</li><li class="list-group-item">Color: ' + carList[i].carColor + '</li><li class="list-group-item">Rating: <span class="' + updateColorIndicator(carList[i].customerRating) + '">' + carList[i].customerRating + '</span></li><li class="list-group-item">Price: ' + carList[i].price + '</li></ul><button class="btn btn-danger" id="delete">Delete</button>');

  }
}

//  Function that removes records from array (refreshDOM will reflect change)
function removeCar(carDiv) {
  var tempCarNumber = parseInt(carDiv.find("#carNumber").text())-1;
  console.log('Removing car index #:', tempCarNumber, carDiv.children("#carNumber"));
  carList.splice(tempCarNumber, 1);
  refreshDOM();
}

//  Function that updates the color indicator for review star rating
function updateColorIndicator(customerRating) {
  if(customerRating >= 3) {
    return 'label label-success';
  } else {
    return 'label label-danger';
  }
}

//  HARD MODE: random car array picker function
function randomCar() {
  carList.push(randomCarList[getRandomInt(0, randomCarList.length)]);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//  HARD MODE: alphabet sort function
