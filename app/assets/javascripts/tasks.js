$(document).ready(function() {

  $('#search-box').change(function () {
    // When the box changes
    var searchTerm = $(this).val();
    console.log(searchTerm);

    // Fire off request
    $.ajax({
      url: '/tasks/search.json',
      data: { search_term : searchTerm, id : 1, type: 'cool_beans' },
      success: function(json) {
        // Will run once AJAX has returned
        console.log(json);

        $('#search-results').append("<p>" + json[0].title + "</p>");
      }
    });

  });

});
