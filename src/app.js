var winHeight = $(document).height();

$(document).ready(function () {

    $(document).scrollTop(winHeight);

    // window.scrollTo(0,document.body.scrollHeight); inne rozwiązanie 

    $('.show-text').click(function () {
        $('.about-me').slideToggle();
    });

    $('#sun').hover(function () {
        $('.skills-area').fadeToggle();
    });

});
