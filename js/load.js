$(document).ready(function () {
    
    print('loaded')

    $('*').scroll(function() { 
        console.log('test') 
        var scrolltotop = document.scrollingElement.scrollTop;
        var target = document.getElementById("hero");
        var xvalue = "center";
        var factor = 0.5;
        var yvalue = scrolltotop * factor;
        target.style.backgroundPosition = xvalue + " " + yvalue + "px";
    });

});

function print(val) { console.log(val) };

function scrolled() {
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("hero");
    var xvalue = "center";
    var factor = 0.14;
    //var yvalue = scrolltotop * factor * -1;
    //target.style.backgroundPosition = xvalue + " " + yvalue + "px";
    var viewportHeight = $('html').height();
    var viewportWidth = $('html').width();
    var percentDown = (document.scrollingElement.scrollTop)/viewportHeight*2
    console.log(percentDown)
    target.style.backgroundPosition = xvalue + " " + -700*percentDown + "px";
}