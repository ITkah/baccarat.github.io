$(document).ready(function(){
    $(".call_menu").on("click", function(e){
        e.preventDefault();
        $("nav").addClass("active_menu");
    });
    $(".close_menu").on("click", function(e){
        e.preventDefault();
        $("nav").removeClass("active_menu");
    });
    $(".custom_link_item").on("click", function(e){
        $(this).toggleClass("active_custom");
        $(".custom_hide_link").slideToggle(150);
    });
});