$( function() {
    $(".select").each(function() {
        $(this).selectmenu({
            width: "100%",
            classes: {
                "ui-selectmenu-button": "ui-selectmenu-button_" + $( this ).data("theme"),
                "ui-selectmenu-menu": "ui-selectmenu-menu_" + $( this ).data("theme")
            }
        });
    });
});
