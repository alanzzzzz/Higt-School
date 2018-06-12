$(function(){
    $('.act1btn1').click(function(){
        window.location.href='hs2.html'
    });
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




    var res =/^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/;
    var res2 = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
    var res3 =/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
   /* $('.pag2c1inp2').keyup(function(){
        var thisval=$(this).val();
        if(res.test(thisval)){
            if($('.pag2c1inp1').val().length===2){
                if($('.pag2c1inp3').val().length===18){
                    $('pag2btn2').attr('disabled',false);
                }else{
                    $('.pag2btn2').attr('disabled',true);
                }
            } else{
                $('.pag2btn2').attr('disabled',true);
            }
        }else{
            $('.pag2btn2').attr('disabled',true);
        }
    });*/
    //姓名输入事件
    $('.pag2c1inp1').keyup(function(){
        if($('.pag2c1inp1')=='number'){
            if($('.pag2c1inp2')=='number'){
                if($('.pag2c1inp3')=='number'){
                    $('pag2btn2').attr('disabled',false);
                }else{
                    $('.pag2btn2').attr('disabled',true);
                }
            } else{

            }
        }else{

        }
    });



    //手机号码输入事件
    $('.pag2c1inp2').keyup(function(){


    });

    //身份证号输入
    $('.pag2c1inp3').keyup(function(){


    });

    //相机
    $('#photo').change(function(){

    });































});
