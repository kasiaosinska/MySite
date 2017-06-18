var winHeight = $(document).height();

$(document).ready(function () {

    $(document).scrollTop(winHeight);

    $('.show-text').click(function () {
        $('.about-me').slideToggle();
    });

    $('#sun').hover(function () {
        $('.skills-area').fadeToggle();
    });

});
