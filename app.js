//  car records array
var carList = [];

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
  $("main").on("submit", function(event) {
    var tempMake = $("#make").val();
    var tempModel = $("#model").val();
    var tempYear = $("#year").val();
    var tempCarColor = $("#carColor").val();
    var tempCustomerRating = $("#customerRating").val();
    var tempPrice = $("#price").val();
    var tempCar = new Car(tempMake, tempModel, tempYear, tempCarColor, tempCustomerRating, tempPrice);
    carList.push(tempCar);
  });
  //  Event listener for form submission
  $("main").on('click', '#submit', function(){
    //  Form handler function called
      //  Constructor function called
      //  refreshDOM function called
        //  color indicator update function called
        //  HARD MODE: alphabet sort function called
        //  PRO MODE: update price total function called
  });

  //  Event listener for record deletion
  $("main").on('click', '#delete', function(){
    //  Remove records function called
      //  refreshDOM function called
        //  color indicator update function called
        //  HARD MODE: alphabet sort function called
        //  PRO MODE:  update price total function called
  });

});

//  Form handler function

//  Function that clears the DOM and appends the contents of the records array
function refreshDOM(){

}

//  Function that removes records from array (refreshDOM will reflect change)

//  Function that updates the color indicator for review star rating

//  HARD MODE: random car array picker function

//  HARD MODE: alphabet sort function
