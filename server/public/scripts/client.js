//  Once page is loaded, this starts event listeners and any contained functions
$(document).ready(function () {

  //  Loads animals already in DB and displays them on DOM
  refreshAnimals();

  //  Focuses "Type of Animal" text input on page load
  $('#animal-type').focus();

  //  Event Listener for Submit button
  $('#animal-form').on('submit', function () {
    event.preventDefault();
    submitAnimals();
  });
});

//  Makes AJAX GET request and populates/refreshes DOM with
//  current DB contents
function refreshAnimals() {
  $.ajax({
    type: 'GET',
    url: '/animals',
    success: function (data) {
      $('#animal-inventory').empty();
      $.each($(data), function (i, animal) {
        $('#animal-inventory').append('<div id="animal"></div>');
        var $el = $('#animal-inventory').children().last();

        $el.append('<h3>' + data[i]['animal_type'] +
        ' <span class="label label-success">Quantity: ' + data[i].quantity + '</span></h3>');
        $el.fadeIn(1000);
      });
    },
  });
}

//  Makes AJAX PUT request to enter new animal into DB
function submitAnimals() {
  var values = {};

  $.each($('#animal-form').serializeArray(), function (i, field) {
    values[field.name] = field.value;
  });

  console.log('This is the object containing the form input: ' + values['animal-type']);

  $.ajax({
    type: 'PUT',
    url: '/animals',
    data: values,
    success: function (data) {
      refreshAnimals();
      if (data) {
        console.log('PUT request worked');
      } else {
        console.log('error');
      }
    },
  });

  $('#animal-form').find('input[type=text]').val('');
  $('#animal-type').focus();
}
