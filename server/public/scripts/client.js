// Ohai jQuery!
$(document).ready(function () {
  //  First things first, refresh tasks from DB
  refreshTasks();

  //  Focus task text field
  $('#taskDesc').focus();

  //  Add task event listener
  $('#task-form').on('submit', function () {
    event.preventDefault();
    addTasks();
  });

  //  Toggle complete task event listener
  $('#task-list').on('click', '#task-checkbox', function () {
    if ($(this).data('checked')) {
      console.log($(this).parent().attr('id'));
      toggleTasksStatus($(this).parent().data('taskID'), false);
    } else {
      toggleTasksStatus($(this).parent().data('taskID'), true);
    }
  });

  //  Delete task event listener
  $('#task-list').on('click', '#task-delete', function () {
    if (confirm('Are you sure you want to delete your task?')) {
      deleteTasks($(this).parent().data('taskID'));
    }
  });

});

// FUNCTIONS!

//  Called on page load and events to refresh DOM with DB contents
function refreshTasks() {
  databaseMagic('GET', '/refresh');
}

//  Called on add task event
function addTasks() {
  var values = {};
  $.each($('#task-form').serializeArray(), function (i, field) {
    values[field.name] = field.value;
  });

  databaseMagic('POST', '/add', values, 'Yay! Your task has been added! Now do it!');

  $('#taskDesc').val('');
}

//  Called on toggle task event
function toggleTasksStatus(taskID, status) {
  databaseMagic('POST', '/toggle', { taskID: taskID, taskStatus: status, }, 'You have toggled the completion status of your task!');
}

//  Called on delete task event
function deleteTasks(taskID) {
  databaseMagic('POST', '/delete', { taskID: taskID, }, 'You have deleted your task!');
}

/**
 * Makes AJAX calls to server for purpose of interacting with DB
 * @param {String} typeOfHTTPrequest - e.g. 'GET', 'POST', etc
 * @param {String} route - e.g. '/refresh', '/add', etc
 * @param {Object} [data] - Object passed in from form or click
 * @param {Object} [data.taskDesc] - Property containing task desc as String
 * @param {Object} [data.taskID] - Property containing database ID as String
 * @param {String} [message] - e.g. 'Yay! Your task was added! Now do it!'
 */

function databaseMagic(typeOfHTTPrequest, route, data, message) {
  if (data !== undefined) { //  If block is for DB manipulation
    $.ajax({
      type: typeOfHTTPrequest,
      url: route,
      data: data,
      beforeSend: console.log('If block - data parameter has value'),
      success: function (data) {
        console.log('From server: ' + data);
        refreshTasks();
      },
    });
  } else { //  Else block should only be reached for refreshTasks()
    $.ajax({
      type: typeOfHTTPrequest,
      url: route,
      beforeSend: console.log('Else block - data parameter undefined'),
      success: function (data) {
        console.log('Before refreshDOM: ' + data);
        refreshDOM(data);
      },
    });
  }
}

//  Performs the work called by the else block of databaseMagic() via
//  refreshTasks()
function refreshDOM(data) {
  $('#task-list').empty();
  $.each(data, function (i, task) {
    console.log(data);
    $('#task-list').append('<div class="task"></div>');

    var $task = $('#task-list').children().last();

    $task.data('taskID', data[i].id);
    $task.append('<i id="task-checkbox" class="material-icons">check_box_outline_blank</i>');

    var $checkbox = $task.children().first();

    $checkbox.data('taskID', data[i].id);
    $checkbox.data('checked', data[i].task_status);

    console.log($('#task-checkbox').data('checked'));

    if ($checkbox.data('checked')) {
      $checkbox.text('check_box');
    } else {
      $checkbox.text('check_box_outline_blank');
    }

    $task.append('<p>' + data[i].task_description + '</p>');
    $task.append('<i id="task-delete" class="material-icons">delete</i>');

    var $taskDelete = $task.children().last();
    $taskDelete.data('taskID', data[i].id);

  });

  $('#taskDesc').focus();
}
