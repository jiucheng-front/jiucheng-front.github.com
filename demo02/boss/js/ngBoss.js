angular.module('boss',['ng','ngTouch']).
	controller('parentCtrl',function($scope){
		$scope.jump=function(url,trans){
			if(!trans){
				trans='slide';
			}
			$.moblie.changePage(url,{transition:trans})
		}
		//监听新page beforeshow事件(已挂到DOM但尚未显示出来)——使用Angular重新编译新挂载的page
		angular.element('body').on('pagebeforeshow',function(event){
			var scope=angular.element(event.target).scope();
			angular.element(event.target).injector().
			invoke(function($compile){
				$compile(angular.element(event.target))(scope);
				scope.$digest();
			})
		})
	}).
	controller('detailCtrl',function($scope,$http){
		$scope.isShow=false;
		$scope.number=5;
		$scope.load=function(){			
			if($scope.number==5){
				$scope.isShow=true;
				$scope.number=10;
			}else{
				$scope.isShow=false;
				$scope.number=5;
			}	
		}
	})
	