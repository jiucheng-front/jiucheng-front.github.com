//JavaScript Document
/*********************************
 *rookie QQ:1123486116
 *rookie making
 *rookie Copyright
 **********************************/
laydate({
    elem: '#time',
    event: 'focus'
});
$(function () {
    $('#guahao .fr input').click(function () {
        if ($('#username').val() == '') {
            alert('请问怎么称呼您？');
            $('#username').focus();
            return false;
        }
        if ($('#username').val().length < 2) {
            alert('你的名字不得小于2个字符！');
            $('#username').focus();
            return false;
        }
        if ($('#username').val().length > 20) {
            alert('你的名字不得大于20个字符！');
            $('#username').focus();
            return false;
        }
        var isMobile = /^(?:13\d|15\d|18\d)\d{5}(\d{3}|\*{3})$/;
        var isPhone = /^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
        if ($('#phone').val() == '') {
            alert('请填写电话号码，以便我们与你取得联系！');
            $('#phone').focus();
            return false;
        }
        if (!isMobile.test($('#phone').val()) && !isPhone.test($('#phone').val())) {
            alert("请正确填写电话号码，例如:134xxxx1234或021-4815xxx");
            return false;
        }
        if ($('#content').val() == '') {
            alert('评论内容不得为空！');
            $('#content').focus();
            return false;
        }
        if ($('#content').val().length > 200) {
            alert('内容不得大于200个字符！');
            $('#content').focus();
            return false;
        }
        return true;
    })
});