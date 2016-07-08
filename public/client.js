$(function() {
    $("form").on("submit", function() {
        event.preventDefault();
        var numbers = $("form").serializeArray();

        $.post("/balance", numbers)
            .then(function(response) {
                $("#randomBalance").empty();
                $("#randomBalance").append("<h3>Current Balance: <span class='label label-success'>" + response + "</span></h3>");
                console.log('Success!', response);
            })
            .catch(function() {
                console.log('Error!');
            });

        $("form input").val("");
    });
});
