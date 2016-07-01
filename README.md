# Xi Weekend GIF Generator

Today you will use [jQuery's ajax function](http://api.jquery.com/jquery.ajax/) to create a [random GIF](https://github.com/Giphy/GiphyAPI#random-endpoint) (not like the peanut butter) generator!

Information and examples about the API can be found [here](https://github.com/Giphy/GiphyAPI).

Your application should have an HTML page with a button on it, when the button is clicked it should retrieve a [random GIF](https://github.com/Giphy/GiphyAPI#random-endpoint) from Giphy and place it on the screen (replacing the previous random GIF if one has been generated). Also, include an optional text input to add tags to your random generation (see docs).

##Hard Mode

Duplicate the same functionality above, but this time with [stickers](https://github.com/Giphy/GiphyAPI#giphy-sticker-api)!

## Pro Mode

Allow normal (non-random) [searching](https://github.com/Giphy/GiphyAPI#sticker-search-endpoint) and show 5 results at a time results. The user should have a `next` button that will allow them to view the next 5 results, so on and so forth. A new search should clear out the previous search results.

## Extra Credit

Add a button that will pull 10 trending GIFS from the Giphy API and put them on the screen. Every time the button is clicked it should clear out the previous results and replace them with the new results.

