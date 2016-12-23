//star




// $(document).ready(function(){
//     var stepW = 24;
//     /*var description = new Array("非常差，回去再练练","真的是差，都不忍心说你了","一般，还过得去吧","很好，是我想要的东西","太完美了，此物只得天上有，人间哪得几回闻!");*/
//     var stars = $(".star > li");
//     var descriptionTemp;
//     $(".showb").css("width",0);
//     stars.each(function(i){
//         $(stars[i]).click(function(e){
//             var n = i+1;
//             $(".showb").css({"width":stepW*n});
//             descriptionTemp = description[i];
//             $(this).find('a').blur();
//             return stopDefault(e);
//             return descriptionTemp;
//         });
//     });
//     stars.each(function(i){
//         $(stars[i]).hover(
//             function(){
//                 $(".description").text(description[i]);
//             },
//             function(){
//                 if(descriptionTemp != null)
//                     $(".description").text("当前您的评价为："+descriptionTemp);
//                 else 
//                     $(".description").text(" ");
//             }
//         );
//     });
// });
// function stopDefault(e){
//     if(e && e.preventDefault)
//            e.preventDefault();
//     else
//            window.event.returnValue = false;
//     return false;
// };



//公用获取不同的元素
function getElement(a){
    return document.querySelectorAll(a);
}
var oneliLists=getElement('.jsone-star');
var twoliLists=getElement('.jstwo-star');


var divitem=document.getElementsByClassName('showb');
var stepW = 24;

function changeItem(list,count){
    for(var i=0;i<list.length;i++){
        list[i].index=i;
        list[i].onclick=function(){
            divitem[count].style.width=(this.index+1)*stepW+'px';
            console.log(this.index);      
        };
    }
}
changeItem(oneliLists,0);
changeItem(twoliLists,1);
