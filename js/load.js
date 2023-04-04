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

$('body').scroll(function() { 
    console.log('test') 
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("hero");
    var xvalue = "center";
    var factor = 0.5;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
});