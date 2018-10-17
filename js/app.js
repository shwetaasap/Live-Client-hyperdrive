
//shweta
$(function () {
    $("p").mouseover(function () {
        $("p").css("background-color", "lightgray");
    });
    $("p").mouseout(function () {
        $("p").css("background-color", "white");
    });
    $(".velo1").mouseover(function () {
        $("#velo1").slideDown().css("display", "block");
    });
    $(".velo1").mouseout(function () {
        $("#velo1").slideDown().css("display", "none");
    });
});

//garima
$(document).ready(function () {
    $("[data-toggle='tooltip']").tooltip();
});



