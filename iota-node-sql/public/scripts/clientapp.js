$(document).ready(function () {
  getData();
  $('#submit-button').on('click', postData);
});

var counter = 0;
function postData() {
  event.preventDefault();
  counter++;
  console.log('counter: ' + counter);
  var values = {};
  $.each($('#sql-form').serializeArray(), function (i, field) {
    values[field.name] = field.value;
  });

  console.log(values);

  $.ajax({
    type: 'POST',
    url: '/people',
    data: values,
    beforeSend: console.log('before!'),
    success: function (data) {
      if (data) {
        // everything went ok
        console.log('from server:', data);
        getData();
      } else {
        console.log('error');
      }
    },
  });

}

function getData() {
  $.ajax({
    type: 'GET',
    url: '/people',
    success: function (data) {
      console.log(data);
      $('#db-content').empty();
      for (var i = 0; i < data.length; i++) {
        $('#db-content').append('<p style="float:left;margin:20px;"><strong>' + data[i].name + '</p>');
        $('#db-content').children().last().append('<br/>' + data[i].address + '<br/>' +
        data[i].city + ', ' + data[i].state + ' ' + data[i].zip_code);
      }
    },
  });
}
