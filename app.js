var carList = [];

function Car(make, model, year, carColor, customerRating, price) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.carColor = carColor;
  this.customerRating = customerRating;
  this.price = price;
}

$(function(){
  $("main").on("submit", function(event) {
    var tempMake = $("#make").val();
    var tempModel = $("#model").val();
    var tempYear = $("#year").val();
    var tempCarColor = $("#carColor").val();
    var tempCustomerRating = $("#customerRating").val();
    var tempPrice = $("#price").val();
    var tempCar = new Car(tempMake, tempModel, tempYear, tempCarColor, tempCustomerRating, tempPrice);
    carList.push(tempCar);
  })
});


var index = carList.indexOf()
carList.splice(x, 1)

// removes 0 elements from index 2, and inserts 'drum'
var removed = myFish.splice(2, 0, 'drum');

var array = [2, 5, 9];
var index = array.indexOf(5);
Note: browser support for indexOf is limited; it is not supported in Internet Explorer 7 and 8.

Then remove it with splice:

if (index > -1) {
    array.splice(index, 1);
