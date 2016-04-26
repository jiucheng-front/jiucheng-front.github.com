

$(document).ready(function(){

$('.al_pic').click(function(){
	var welfare_height = parseInt($(this).next('.al_text').children('.info').css('height'))+parseInt($(this).next('.al_text').children('.m1-box').css('height'));
            if($(this).hasClass('active')){
                $(this).next('.al_text').stop().animate({'height':0});

                $(this).removeClass('active');
            }else{
                $(this).addClass('active').next('.al_text').stop().animate({'height':welfare_height}).siblings('.welfare-list-pic-body').stop().animate({'height':0});

                $(this).siblings('.al_pic').removeClass('active');
            }
        })


$('.botNav li').click(function(){

            if($(this).hasClass('active')){
                 $(this).children('.hideNav').show();

                $(this).removeClass('active');
            }else{
                 $(this).children('.hideNav').hide();

                $(this).addClass('active');
            }
        })
		
});





	  

	 



