//  Array for storing movies to display on DOM
var movies = [];

//  On page load
$(function(){

  //  Prepopulates page with my top 3 movies
  searchByTitle('Inception');
  searchByTitle('Interstellar');
  searchByTitle('Star Wars The Force Awakens');

  //  Listens for click on search for movie button
  $("#searchMovie").on("click", function(){
    movies = [];
    searchByTitle($("#movieName").val());
  });

  //  Listens for click on random movie button
  $("#randomMovie").on("click", function(){
    movies = [];
    getRandomMovie(generateMovieID());
  });

});

//  Sends request and receives response to/from OMDB API
function searchByTitle(title){
  var queryString = ['http://www.omdbapi.com/?t=', '&y=&plot=short&r=json'];
  $.get(queryString[0] + title + queryString[1])
  .done(function(response){
    var movie = {
      title: response.Title,
      releaseYear: response.Year,
      runtime: response.Runtime,
      posterURI: response.Poster,
      plot: response.Plot
    };

    movies.push(movie);

    refreshDOM();
  })
  .fail(function(){
    console.log('What did you do? It broke.');
  });
}

//  Refreshes #movies with contents of var movies
function refreshDOM() {
  $("#movies").empty();

  for (var i = 0; i < movies.length; i++) {
    $("#movies").append("<div class='movie'></div>");
    $("#movies div:last").css("background-image", "url(" + movies[i].posterURI + ")");
    $("#movies div:last").css("background-size", "cover");
    $("#movies div:last").append("<h2>" + movies[i].title + " <span class='label label-info'>" + movies[i].releaseYear + "</span></h2>");
      $("#movies div:last").append("<p>" + movies[i].plot + " <em>(" + movies[i].runtime + ")</em></p>");
  }
}

//  Get random movie through OMDB API
//  (Displays undefined responses currently)
function getRandomMovie(id){
  var queryString = ['http://www.omdbapi.com/?i=', '&plot=short&r=json'];
  $.get(queryString[0] + id + queryString[1])
  .done(function(response){
    var movie = {
      title: response.Title,
      releaseYear: response.Year,
      runtime: response.Runtime,
      posterURI: response.Poster,
      plot: response.Plot
    };

    movies.push(movie);

    refreshDOM();
  })
  .fail(function(){
    console.log('What did you do? It broke.');
  });
}

//  Random movie ID generator
function generateMovieID(){
  var string = 'tt';
  for (var i = 0; i < 7; i++) {
    string += getRandomIntInclusive(0, 9);
  }
  return string;
}

//  Gets random numbers for our random movie function
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
