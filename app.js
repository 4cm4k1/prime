//  [Red, Yellow, Green, Blue]
var colorTotals = [0, 0, 0, 0];

function appendButton(buttonClicked) {
    $(".box-container").append("<div class='color-cube well " + buttonClicked.data("color") + "'></div>");
}

function incrementColorTotals(buttonClicked) {
    var redIndex = 0;
    var yellowIndex = 1;
    var greenIndex = 2;
    var blueIndex = 3;

    switch (buttonClicked.data("color")) {
        case 'red':
            colorTotals[redIndex]++;
            updateDOMColorTotals(buttonClicked.data("color"), colorTotals[redIndex]);
            break;
        case 'yellow':
            colorTotals[yellowIndex]++;
            updateDOMColorTotals(buttonClicked.data("color"), colorTotals[yellowIndex]);
            break;
        case 'green':
            colorTotals[greenIndex]++;
            updateDOMColorTotals(buttonClicked.data("color"), colorTotals[greenIndex]);
            break;
        case 'blue':
            colorTotals[blueIndex]++;
            updateDOMColorTotals(buttonClicked.data("color"), colorTotals[blueIndex]);
            break;
    }
}

function updateDOMColorTotals(strColorSelected, varColorSelected) {
    console.log('updateDOM: ', strColorSelected, ' is now ', varColorSelected);
    $("#" + strColorSelected).text(varColorSelected);
}

$(function() {
    $("main").on("click", ".btn", function() {
        console.log('You selected ', $(this).data("color"), '!');
        appendButton($(this));
        incrementColorTotals($(this));
    });
});
