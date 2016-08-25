// JavaScript Document
function check() {
if (gh_form.name.value==""){alert("请填入您的姓名");gh_form.name.focus();return false}
if (gh_form.tel.value==""){alert("请填入您的联系方式");gh_form.tel.focus();return false}
if (gh_form.date.value=="" || gh_form.date.value=="点击选择就诊日期"){alert("请填入您的就诊日期");gh_form.date.focus();return false}
return true;
}
//过滤空格
function ignoreSpaces(string) {
var temp = "";
string = '' + string;
splitstring = string.split(" ");
for(i = 0; i < splitstring.length; i++)
temp += splitstring[i];
return temp;
}
