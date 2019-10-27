var num = 0;
var num_list =1;
var a_1 = document.getElementsByClassName('change_image');
	a = setInterval(function(){
			if(num==0){
				a_1[0].style.opacity=0;
				a_1[1].style.backgroundImage='url(static/img/bg_'+num_list+'.jpg)';
				num = 1;
				num_list+=1;
				if(num_list==5){
					num_list=1;
				}
			}
			else if(num==1){
				a_1[0].style.backgroundImage='url(static/img/bg_'+num_list+'.jpg)';
				a_1[0].style.opacity=1;
				num = 0;
				num_list+=1;
				if(num_list==5){
					num_list=1;
				}
			}
		},10000);