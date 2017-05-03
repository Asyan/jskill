$(document).ready(function() {
  $("#filter").keyup(function() {

    let filter = $(this).val(), count = 0;

    $("nav ul li").each(function() {
      if ($(this).text().seach(new RegExp(filter, "i")) < 0) {
          $(this).fadeOut();

      } else {
          $(this).show();
          count++;
      }
    });

    let numberItems = count;
    $("#filter-count").text("Numbers of Comments = " + count);
  });
});
