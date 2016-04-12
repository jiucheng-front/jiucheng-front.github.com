/**
 * Created by Administrator on 2015/12/8.
 */
angular.module('myModule1',['ng']).controller('myCtrl1',function($scope){
  /*$scope.p1=new Object();
   $scope.p1.price=10;
   $scope.p1.count=1;*/
  $scope.cart=[];//购物车
  $scope.cart.push({price:10,count:1});
  $scope.addProduct=function(){
    var p=new Object();
    p.price=Math.floor(Math.random()*100);
    p.count=1;
    $scope.cart.push(p);
  };
  //计算总金额
  $scope.total=function(){
    console.log('重新计算总价');
    var sum=0;
    for(var i=0;i<$scope.cart.length;i++){
      var p=$scope.cart[i];
      sum+=p.price*p.count;
    }
    return sum;
  }
});
