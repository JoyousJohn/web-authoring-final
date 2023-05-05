var isAuth = false;
var observer;

$(document).ready(function () {

    console.log('yes')

    observer = new IntersectionObserver(callback);

    /*observer.observe(document.getElementById('in-depth'))
    observer.observe(document.getElementById('general-resources'))
    observer.observe(document.getElementById('notable-figures'))
    observer.observe(document.getElementById('digital-resources'))*/

    var elms = $('.general-child')

    elms.each(function(idx, li) {
        observer.observe(li)
    });

    var elms = $('.guy-wrap')

    elms.each(function(idx, li) {
        observer.observe(li)
    });

    function callback(entries, observer) {

        console.log('yes2')

        entries.forEach(entry => {
            if (entry.isIntersecting) {

                observer.unobserve(entry.target);

                if ($(entry.target).attr('class') === 'general-child') {
                    setTimeout(function(){
                        //$(entry.target).find('p').slideDown();
                        //$(entry.target).find('li').slideDown();
                        $(entry.target).find('p').css('opacity', 1);
                        $(entry.target).find('li').css('opacity', 1);
                    }, 500);

                } else if ($(entry.target).attr('class') === 'guy-wrap') {
                    setTimeout(function(){
                        $(entry.target).css('opacity', 1);
                    }, 500);
                }
                 
            }
        });
    }
});