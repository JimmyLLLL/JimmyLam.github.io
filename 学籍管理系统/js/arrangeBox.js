/*
* @Author: JimmyLLLL
* @Date:   2018-04-16 22:28:17
* @Last Modified by:   JimmyLLLL
* @Last Modified time: 2018-04-24 16:45:57
*/
//排序输出接口 
//调用value后，进行排序，排序再进行dom输出
var monitor;
var arrTr = new Array(10);  //接受tr所有数据
var upDown;
var upDown0=1;//偶数为降，奇数为升
var upDown1=0;//偶数为降，奇数为升
var upDown2=0;//偶数为降，奇数为升
var upDown3=0;//偶数为降，奇数为升
var upDown4=0;//偶数为降，奇数为升


for(var i = 0;i < arrTr.length; i++){  
   arrTr[i] = new Array(2);    //每行有10列  
}  
var min0; //经典排序需要数据1
var min1; //经典排序需要数据2




//判断升序降序，输出更改html值
function addupDown(obj,monitor)
{
  if(monitor==0)
  {

    if(upDown0%2==0)
  {
    obj.innerHTML = "编号 ↓";
  }

  else
  {
    obj.innerHTML = "编号 ↑";
  }
upDown0++;
upDown1=0;
upDown2=0;
upDown3=0;
upDown4=0;
  }
 
 if(monitor==3)
  {
    if(upDown1%2==0)
  {
    obj.innerHTML = "年龄 ↓";
  }

  else
  {
    obj.innerHTML = "年龄 ↑";
  }
upDown1++;
upDown0=0;
upDown2=0;
upDown3=0;
upDown4=0;
  }

if(monitor==1)
  {
    if(upDown4%2==0)
  {
    obj.innerHTML = "学号 ↓";
  }

  else
  {
    obj.innerHTML = "学号 ↑";
  }
upDown1=0;
upDown0=0;
upDown2=0;
upDown3=0;
upDown4++;
  }




  if(monitor==5)
  {

    if(upDown2%2==0)
  {
    obj.innerHTML = "分数 ↓";
  }

  else
  {
    obj.innerHTML = "分数 ↑";
  }
upDown2++;
upDown0=0;
upDown1=0;
upDown3=0;
upDown4=0;
  }

  if(monitor==6)
  {

    if(upDown3%2==0)
  {
    obj.innerHTML = "入学年份 ↓";
  }

  else
  {
    obj.innerHTML = "入学年份 ↑";
  }
   upDown3++;
   upDown0=0;
   upDown1=0;
   upDown2=0;
   upDown4=0;

  }

  
}


var thData = document.getElementsByClassName('thData');
          thData[0].style.backgroundColor = "green"; //初始化默认编号选中
          thData[0].style.color = "white";


      for(var i=0;i<5;i++) { //第一个for //检测哪个.thdata被按到
       thData[i].onclick=function(){ //第一次function
  	     monitor= this.getAttribute('value'); //获取被按到的th的value
         addupDown(this,monitor);
         if(monitor==0)
         {

          for(var k=0;k<10;k++)//第二次for //传原始数据进数组
         {
          arrTr[k][0]=document.getElementsByClassName('trToggle')[k];
          arrTr[k][1]=document.getElementsByClassName('trToggle')[k].getElementsByTagName('td')[monitor].children[1].innerHTML;
          console.log(arrTr[k][1]);
         } //第二次for

         }
         else
         {
          for(var k=0;k<10;k++)//第二次for //传原始数据进数组
         {
          arrTr[k][0]=document.getElementsByClassName('trToggle')[k];
          arrTr[k][1]=document.getElementsByClassName('trToggle')[k].getElementsByTagName('td')[monitor].innerHTML;

         } //第二次for
         }
  	     
         if(monitor==0) //css变幻逻辑
         {
          thData[0].style.backgroundColor = "green";
          thData[1].style.backgroundColor = "";
          thData[2].style.backgroundColor = "";
          thData[3].style.backgroundColor = "";
          thData[4].style.backgroundColor = "";

          thData[0].style.color = "white";
          thData[1].style.color = "green";
          thData[2].style.color = "green";
          thData[3].style.color = "green";
          thData[4].style.color = "green";

          thData[1].innerHTML = "学号 ↕";
          thData[2].innerHTML = "年龄 ↕";
          thData[3].innerHTML = "分数 ↕";
          thData[4].innerHTML = "入学年份 ↕";
          upDown=upDown0;
         }
         else if(monitor==1)
         {
           thData[0].style.backgroundColor = "";
          thData[1].style.backgroundColor = "green";
          thData[2].style.backgroundColor = "";
          thData[3].style.backgroundColor = "";
          thData[4].style.backgroundColor = "";

          thData[0].style.color = "green";
          thData[1].style.color = "white";
          thData[2].style.color = "green";
          thData[3].style.color = "green";
          thData[4].style.color = "green";

          thData[0].innerHTML = "编号 ↕";
          thData[2].innerHTML = "年龄 ↕";
          thData[3].innerHTML = "分数 ↕";
          thData[4].innerHTML = "入学年份 ↕";
          upDown=upDown4;
         }
         else if(monitor==3)
         {
          thData[0].style.backgroundColor = "";
          thData[1].style.backgroundColor = "";
          thData[2].style.backgroundColor = "green";
          thData[3].style.backgroundColor = "";
          thData[4].style.backgroundColor = "";

           thData[0].style.color = "green";
          thData[1].style.color = "green";
          thData[2].style.color = "white";
          thData[3].style.color = "green";
          thData[4].style.color = "green";

          thData[0].innerHTML = "编号 ↕";
          thData[1].innerHTML = "学号 ↕";
          thData[3].innerHTML = "分数 ↕";
          thData[4].innerHTML = "入学年份 ↕";
          upDown=upDown1;
         }
         else if(monitor==5)
         {
          thData[0].style.backgroundColor = "";
          thData[1].style.backgroundColor = "";
          thData[2].style.backgroundColor = "";
          thData[3].style.backgroundColor = "green";
          thData[4].style.backgroundColor = "";

          thData[0].style.color = "green";
          thData[1].style.color = "green";
          thData[2].style.color = "green";
          thData[3].style.color = "white";
          thData[4].style.color = "green";

          thData[0].innerHTML = "编号 ↕";
          thData[1].innerHTML = "学号 ↕";
          thData[2].innerHTML = "年龄 ↕";
          thData[4].innerHTML = "入学年份 ↕";
          upDown=upDown2;
         }
         else if(monitor==6)
         {
          thData[0].style.backgroundColor = "";
          thData[1].style.backgroundColor = "";
          thData[2].style.backgroundColor = "";
          thData[3].style.backgroundColor = "";
          thData[4].style.backgroundColor = "green";

          thData[0].style.color = "green";
          thData[1].style.color = "green";
          thData[2].style.color = "green";
          thData[3].style.color = "green";
          thData[4].style.color = "white";

          thData[0].innerHTML = "编号 ↕";
          thData[1].innerHTML = "学号 ↕";
          thData[2].innerHTML = "年龄 ↕";
          thData[3].innerHTML = "分数 ↕";
          upDown=upDown3;
         }

 






  	     	if(upDown%2==0) //如果降序
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
  	     	} //如果降序的if



  	     	else if(upDown%2==1) //如果升序
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
  	     	}//if如果升序
 upDown="";


  	 $('.trToggle').remove();
 for(var q=0;q<10;q++)
 {
    $('#inforTable').append(arrTr[q][0]); //初始化升序降序
 }


   }//第一个function定位



  }//第一个for定位

  





