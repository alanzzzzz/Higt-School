$(function(){
    $('#pag3pop').click(function(){
        $('.pag3pop').slideToggle();
        if($('.pag3q1').hasClass('d-none')){
            $('.pag3q1').removeClass('d-none');
            $('.pag3q').addClass('d-none');
        }else{
            $('.pag3q1').addClass('d-none');
            $('.pag3q').removeClass('d-none');
        }
    });
    $('.pag3btnf').click(function(){
        window.location.href='hs4.html'
    });
});
