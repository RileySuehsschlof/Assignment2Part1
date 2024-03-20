$(function () {
    $(".draggable").draggable();//Makes draggable class draggable
    $("#selectable").selectable();//Makes selectable id selectablr
    $("#droppable").droppable({
        drop: function (event, ui) {
            $(this).addClass("ui-state-highlight").css("background-color", "lightgreen");
            $(this).find("p").html("item dropped");
        }
    });
    $(".resizeable").resizable();//class to allow resizing
    $(function () {
        $("#accordion").accordion();// allows accordion id's
    });
    $(function () {
        $("#datepicker").datepicker();//datepicker id
    });
    $(function () {
        $("#slider").slider({
            slide: function (event, ui) {//slider that has value 1-100%
                $("#sliderpercent").text(ui.value + "%");
            }
        });
    });
});
$(function () {
    var colors = [//list of colors for autocomplete
        "Red",
        "Green",
        "Blue",
        "Yellow",
        "Orange",
        "Purple",
        "Brown",
        "Magenta",
        "Pink",
        "Violet"
    ];
    $("#tags").autocomplete({
        source: colors
    });
});
function hidebox() {//effect hide
    $("#hide").hide();
}
function showbox() {//effect show
    $("#hide").show();
}
function explode() {//effect explode
    $("#explode").effect("explode", { pieces: 16 });
}
function resetExplode() {//reset explode
    $("#explode").show();
}
function fadeIn() {//fade in
    $("#fade").fadeIn(1000);
}
function fadeOut() {//fade out
    $("#fade").fadeOut(1000);
}
function pink() {//change box to pink
    $("#color").animate({ 'backgroundColor': '#f08080' })
}
function red() {//change box to red
    $("#color").animate({ 'backgroundColor': '#ff0000' })
}