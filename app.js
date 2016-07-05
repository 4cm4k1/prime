$(function(){

  //  Random GIF Button Event Listener
  $("#randomGIF").on("click", getRandomGIF);
});

var giphyAPIkey = 'dc6zaTOxFJmzC';
var randomGIFobj = {};
var randomGIFheight = 0;
var randomGIFwidth = 0;
var randomGIFsrc = '';

function getRandomGIF() {
  randomGIFobj = $.get("https://api.giphy.com/v1/gifs/random?api_key=" + giphyAPIkey)
  .done(function(){
    console.log('This is what I got back:', randomGIFobj);
  })
  .always(function(){
    randomGIFheight = randomGIFobj.responseJSON.data.image_height;
    randomGIFwidth = randomGIFobj.responseJSON.data.image_width;
    randomGIFsrc = randomGIFobj.responseJSON.data.image_url;
    showRandomGIF();
    console.log('end of always');
  });
}

function showRandomGIF() {
  var $gifDiv = $("#allTheGIFs");
  $gifDiv.empty();
  $gifDiv.append("<img/>");
  $gifDiv.find("img").attr("src", randomGIFsrc);
  $gifDiv.find("img").attr("height", randomGIFheight);
  $gifDiv.find("img").attr("width", randomGIFwidth);
  $gifDiv.find("img").attr("class", "img-responsive img-rounded");
}
