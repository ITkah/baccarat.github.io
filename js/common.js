$(document).ready(function() {
    jQuery('.wrapper_section, .right_panel_wrap').theiaStickySidebar({
        additionalMarginTop: 25
    });
    $(".call_menu").on("click", function(e) {
        e.preventDefault();
        $("nav").addClass("active_menu");
    });
    $(".close_menu").on("click", function(e) {
        e.preventDefault();
        $("nav").removeClass("active_menu");
    });

    $(".custom_link_item").on("click", function(e) {
        $(this).toggleClass("active_custom");
        $("nav").toggleClass("scroll_element");
        $(".custom_hide_link").slideToggle(150);
    });

    $(".menu_head li").each(function() {
        this_li = $(this);
        if ($(this_li).find("ul").length > 0) {
            $(this_li).append('<p class="arrow_mob"></p>')
        }
    });
    $(".arrow_mob").on("click", function(e) {
        $(this).siblings(".sub-menu").slideToggle(100);
    });
});