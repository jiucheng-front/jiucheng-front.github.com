/**
 * Created by Administrator on 2016/10/19.
 */
document.writeln('<style>.swt_m{width: 287px; height: 184px; margin-left: -140px; overflow: hidden; position: fixed; top: 50%; left: 50%; margin-top: -80px; z-index: 999999999999; display: block; background-position: 50% 0% !important; background-repeat: no-repeat no-repeat !important; display:none;}</style><div class="swt_m_bg" ></div><div class="swt_m" style="background-image: url(images/shang1.jpg) !important; border-radius: 10px;" ><div style="position:absolute; top:0px; right:0px; z-index:904;"><a href="javascript:void(0);" class="closes" target="_self"><img border="0" style="width:40px;" src="images/cha.png"></a></div><a href="javascript:void(0)" onclick="LR_HideInvite();openZoosUrl();return false;" target="_blank" style="width:280px; height:136px; display:block; text-decoration:none;">&nbsp;</a><div style="width:100%;height:50px;overflow:hidden;"><a href="tel:02258171018" target="_blank" style=\"width:50%; height:50px; float:left; display:block;\"><img src="images/shang_2.png" style=" width:100%;height:50px; display:block;"></a><a href="javascript:;" onclick="LR_HideInvite();openZoosUrl();return false;" target="_blank" style=\"width:50%; height:50px; float:left; display:block;\"><img src="images/shang_1.png" style="width:100%;height: 50px; display:block;"></a></div></div>');

$(document).ready(function() {
    $('.swt_m .closes').click(function() {
        $(".swt_m_bg").hide();
        $(".swt_m").slideUp();
        setTimeout("openM()", 25000);
        //10000
    });
    setTimeout("openM()", 3000);
    //10000
})
function openM() {
    $(".swt_m_bg").show();
    $(".swt_m").slideDown();
}
