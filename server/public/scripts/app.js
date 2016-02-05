$(document).ready(function() {
    //loadData();

    $('#load-data').on('click', loadData);
});

function loadData() {
    $.ajax({
        type: 'GET',
        url: '/data',
        success: function(data) {
            //console.log(data);
            $.each(data.people, function(i, person) {
                $('#ajax-data').append('<div class="person"></div>');
                var $el = $('#ajax-data').children().last();
                $el.append('<h2>' + person.name + '</h2>');
                $el.append('<p>' + person.position + '</p>');
                $el.append('<p>' + person.location + '</p>');
                $el.append('<img src="' + person.imageURL +'" />');
            });
        },
        error: function() {
            // do logic here on fail
            console.log('oops, error!');
        },
        timeout: function() {

        }
    });
}