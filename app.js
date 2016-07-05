var giphyAPIkey = 'dc6zaTOxFJmzC';
var gifPath = 'https://api.giphy.com/v1/gifs/';
var stickerPath = 'https://api.giphy.com/v1/stickers/';
var tags = '&tags=';
var apiKey = 'api_key=';

var queryType;
var queryMethod;
var queryParams = [];
var arrayOfStuff = [];
var paginationIndex = 0;

function getStuff(type, method, params) {
    var paramsURIencoded = '';
    var tempResponse;

    for (var i = 0; i < params.length; i++) {
        paramsURIencoded += params[i];
        if (i + 1 != params.length) {
            paramsURIencoded += '+';
        }
    }
    console.log('method:', method);
    switch (method) {
        case 'random':
            var tempQueryString = 'https://api.giphy.com/v1/' + type + '/' + method + '?' + apiKey + giphyAPIkey;
            if (paramsURIencoded) {
                tempQueryString += '&tag=' + paramsURIencoded;
            }
            tempResponse = $.get(tempQueryString)
                .done(function() {
                    console.log('random tempQueryString:', tempQueryString);
                    console.log('tempResponse', tempResponse);
                }).always(function() {
                    arrayOfStuff = tempResponse.responseJSON.data;
                    updateDOM();
                });
            break;
        case 'search':
            var tempQueryString = 'https://api.giphy.com/v1/' + type + '/' + method + '?q=' + paramsURIencoded + '&' + apiKey + giphyAPIkey;
            tempResponse = $.get(tempQueryString)
                .done(function() {
                    console.log('search tempQueryString:', tempQueryString);
                    console.log('tempResponse', tempResponse);
                }).always(function() {
                    arrayOfStuff = tempResponse.responseJSON.data;
                    updateDOM();
                });
            break;
        case 'trending':
          var tempQueryString = 'https://api.giphy.com/v1/' + type + '/' + method + '?' + apiKey + giphyAPIkey + '&limit=10';
          tempResponse = $.get(tempQueryString)
              .done(function() {
                  console.log('trending tempQueryString:', tempQueryString);
                  console.log('tempResponse', tempResponse);
              }).always(function() {
                  arrayOfStuff = tempResponse.responseJSON.data;
                  updateDOM();
              });
          break;


    }
}

function updateDOM() {
    var $gifDiv = $("#allTheGIFs");
    $gifDiv.empty();

    if (arrayOfStuff.length == undefined) {
        $gifDiv.append("<img/>");
        $gifDiv.find("img").attr("src", arrayOfStuff.image_url);
        $gifDiv.find("img").attr("height", arrayOfStuff.image_height);
        $gifDiv.find("img").attr("width", arrayOfStuff.image_width);
        $gifDiv.find("img").attr("class", "img-responsive img-rounded");
    } else {
        paginateArray(arrayOfStuff);
    }
}

function paginateArray(array) {
    var $gifDiv = $("#allTheGIFs");
    $gifDiv.empty();

    var paginationIndex = $gifDiv.data("paginationIndex") % array.length || 0;

    $gifDiv.data("paginationIndex", paginationIndex + 5);

    var paginatedArray = array.slice(paginationIndex, paginationIndex + 5);

    $gifDiv.append("<button type='button' name='button' id='next' class='btn btn-lg btn-info btn-block'>Next 5</button>");

    for (var i = 0; i < paginatedArray.length; i++) {
        $gifDiv.append("<img/>");
        $gifDiv.find("img:last").attr("src", paginatedArray[i].images.original.url);
        $gifDiv.find("img:last").attr("height", paginatedArray[i].images.original.height);
        $gifDiv.find("img:last").attr("width", paginatedArray[i].images.original.width);
        $gifDiv.find("img:last").attr("class", "img-rounded");
    }
}

$(function() {
    $("#buttons").on("click", "button", function() {
        console.log(this.id);
        switch (this.id) {
            case 'randomGIF':
                queryType = 'gifs';
                queryMethod = 'random';
                break;
            case 'randomSticker':
                queryType = 'stickers';
                queryMethod = 'random';
                break;
            case 'searchGIF':
                queryType = 'gifs';
                queryMethod = 'search';
                if ($("#tags").val() == '') {
                    alert('Please enter a search term!');
                    return;
                }
                break;
            case 'searchSticker':
                queryType = 'stickers';
                queryMethod = 'search';
                if ($("#tags").val() == '') {
                    alert('Please enter a search term!');
                    return;
                }
                break;
            case 'trending':
                queryType = 'gifs';
                queryMethod = 'trending';
                break;
        }

        queryParams = $("#tags").val().split(" ");

        getStuff(queryType, queryMethod, queryParams);
    });

    $("#allTheGIFs").on("click", "#next", function() {
        paginateArray(arrayOfStuff);
    });
});
