function zmshow(page,mslide){

	var page,mslide;

	as = document.getElementById(page).getElementsByTagName('a');

	var tt=new TouchSlider({id:mslide,'auto':'0',fx:'ease-out',direction:'left',speed:300,timeout:5000,'before':function(index){

		var as=document.getElementById(this.page).getElementsByTagName('a');

        var as1=document.getElementById(this.page).getElementsByTagName('span');
		as1[this.p].className='';
		as1[index].className='imgf';
		this.p=index;

	}});

	tt.page = page;

	tt.p = 0;

	for(var i=0;i<as.length;i++){

		(function(){

			var j=i;

			as[j].tt = tt;

			as[j].onclick=function(){

				this.tt.slide(j);

				return false;

			}

		})();

	}

}

//zmshow();







