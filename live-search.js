$(document).ready(function(){
    $("#filter").keyup(function(){
        let filter = $(this).val(), count = 0;

        $("nav ul li").each(function(){
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            } else {
                $(this).show();
                count++;
            }
        });
    });
});
