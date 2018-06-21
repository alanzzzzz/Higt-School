$(function(){
    $('.pag3btn').click(function () {
        $('.enter').removeClass('d-none');
    });
    $('.pag3btn2').click(function () {
        $('.error').removeClass('d-none');
    });
    $('.enter').click(function () {
        window.location.href='hs4.html'
    });
    $('.btnerror').click(function () {
        $('.error').addClass('d-none')
    });

});
