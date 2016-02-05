$(document).ready(function(){
    getData();
});

function getData(){
    $.ajax({
        type: "GET",
        url:"/data",
        success: function(data) {
            console.log(data);
        },
        error: function() {
            console.log('ERROR: Unable to contact the server.');
        }

    });
}