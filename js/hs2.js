$(function(){
    var telReg =/(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/;//手机正则
    var idReg =/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;//身份证正则

    function volidate(){
        var thisVal = $('.pag2c1inp1').val();
        var photo =$('#photo').val();
        var tel = $('.pag2c1inp2').val();
        var id = $('.pag2c1inp3').val();
        if(thisVal.length>0){
            if(telReg.test(tel)){
                if(idReg.test(id)){
                    if(photo.length>0){
                        window.location.href='hs3(2).html'
                    }else{
                        $('.errorphoto').removeClass('d-none')
                    }
                }else{
                    $('.errorcard').removeClass('d-none')
                }
            }else{
                $('.errorphone').removeClass('d-none')
            }

        }else{
            $('.errorname').removeClass('d-none')
        }
    }
    $('.validatebtn').click(function(){
        $('.errorname').addClass('d-none');
        $('.errorphone').addClass('d-none');
        $('.errorcard').addClass('d-none');
        $('.errorphoto').addClass('d-none');
    });

    $('.pag2btn2').click(function(){
        volidate();
    });

    $('#photo').change(function(){
        $(this).attr().css('background-image','src("../image/HigtSchool/pag3jpg1.png"')
    })
});
