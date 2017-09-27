$(document).ready(menu);

function menu() {

    $('<div/>').attr('id', 'map').appendTo('body');
    $('<img/>').attr('src', 'images/menu.jpg').appendTo('#map');
    $('<button/>').attr('id', 'play').appendTo('#map');
    $('#play').text('Play');


    $("#play").click(function () {
        $("body").empty();
        game();
    });
    var clickSound = $("<audio/>").appendTo("body");
    clickSound[0].src = "sounds/click.wav";

    $("#play").click(function () {
        clickSound[0].play();
    });
var soundIng = $('<img/>').attr('src','images/sound.png').css({
    'position': 'absolute',
    'top' : '67%',
    'width' : '10%'

});



}
