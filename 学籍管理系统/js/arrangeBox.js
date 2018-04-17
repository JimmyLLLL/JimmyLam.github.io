/*
* @Author: JimmyLLLL
* @Date:   2018-04-16 22:28:17
* @Last Modified by:   JimmyLLLL
* @Last Modified time: 2018-04-17 16:25:47
*/
//排序输出接口 
//调用value后，进行排序，排序再进行dom输出
var monitor;
var arrTr = new Array(10); 
var upDown=1;//偶数为降，奇数为升
for(var i = 0;i < arrTr.length; i++){  
   arrTr[i] = new Array(2);    //每行有10列  
}  
var min0;
var min1;
//升序降序
$('#Updown').click(function(){
	if(upDown%2==0)
	{
		$('#Updown').html('降序↓');
	}
	else
	{
		$('#Updown').html('升序↑');
	}
	upDown++;
	var radios = document.getElementsByName("same");
	 for(var i=0;i<radios.length;i++) { //第一次for
       if (radios[i].checked==true)
       {
       	radios[i].click();
       }
   }
})


$('#boxRadio1,#boxRadio2,#boxRadio3,#boxRadio4').click(function(){ //click第一次定位
	var radios = document.getElementsByName("same");
      for(var i=0;i<radios.length;i++) { //第一次for
       if (radios[i].checked==true) { //第一次if
  	     monitor=radios[i].getAttribute("value");
  	
 
  	     for(var k=0;k<10;k++)//第二次for
  	     {
  	     	arrTr[k][0]=document.getElementsByClassName('trToggle')[k];
  	     	arrTr[k][1]=document.getElementsByClassName('trToggle')[k].getElementsByTagName('td')[monitor].innerHTML;

  	     } //第二次for
  	     
  	     	if(upDown%2==0)
  	     	{
  	     		
  	     		for(var o=0;o<9;o++) //第三次for
  	 {
  	 	for(var l=0;l<9-o;l++) //第四次for
  	 {
         if(arrTr[l][1]*2/2>=arrTr[l+1][1])
         {
          min1=arrTr[l+1][1];
         arrTr[l+1][1]=arrTr[l][1];
         arrTr[l][1]=min1;

         	min0=arrTr[l+1][0];
         arrTr[l+1][0]=arrTr[l][0];
         arrTr[l][0]=min0;
         }
         
  	 }//第四次for

  	 }//第三次for
  	     	}
  	     	else if(upDown%2==1)
  	     	{
  	     		for(var o=0;o<9;o++) //第三次for
  	 {
  	 	for(var l=0;l<9-o;l++) //第四次for
  	 {
         if(arrTr[l][1]*2/2<=arrTr[l+1][1])
         {
          min1=arrTr[l+1][1];
         arrTr[l+1][1]=arrTr[l][1];
         arrTr[l][1]=min1;

         	min0=arrTr[l+1][0];
         arrTr[l+1][0]=arrTr[l][0];
         arrTr[l][0]=min0;
         }
         
  	 }//第四次for

  	 }//第三次for
  	     	}
  	 
   }//第一个if定位
  }//第一个for定位
  $('.trToggle').remove();
 for(var q=0;q<10;q++)
 {
    $('#inforTable').append(arrTr[q][0]);
 }
})//第一次click定位





