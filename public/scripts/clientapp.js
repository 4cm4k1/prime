$(document).ready(function () {
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
      $('body').append('<p style="float:left;margin:20px;"><strong>' + data[0].name + '</p>');
      $('body').children().last().append('<br/>' + data[0].address + '<br/>' +
      data[0].city + ', ' + data[0].state + ' ' + data[0].zip_code);
    },
  });
}
