/*
* @Author: JimmyLLLL
* @Date:   2018-04-09 23:05:22
* @Last Modified by:   JimmyLLLL
* @Last Modified time: 2018-04-24 20:54:40
*/
/*删除*/
/*点击删除按钮调用删除函数*/
$('#searchButton').click(function(){
	deleteData();
})
//删除函数
var nowPage0=1;
var deleteTarget;
for(var i=0;i<10;i++)
{
	document.getElementsByClassName('tD')[i].onclick = function(){
		var ok=confirm("确定删除此信息？");
		if(ok==true)
		{
			deleteTarget=this.children[1].innerHTML;
		deleteData();
		}
		
	}
}
function deleteData()
{
$.ajax({  //ajax
method : "POST",
url : "http://exp.szer.me/parry/plExp/stuInfoOO/deleteInfo.php",
dataType:'json',
header : {

},
data : {
	id : deleteTarget //输入需要删除数值的id
},
error : function()
{
	alert('此编号未登记');
},
success : function(data)
{
	if(nowPage0>=2)
	{
		initPage(nowPage0,tArray[nowPage0-2][1]);   //初始化界面
	}
	else if(nowPage0 ==1)
	{
		initPage(nowPage0,tArray[0][0]);
	}
    
	if(data.retcode==20020000)
     {
		alert(data.retmsg);
	}
	else if(data.retcode==20040301||data.retcode==20020000||data.retcode==20040002)
	{
		alert(data.retmsg);
	}
	
}
});
}


//通过x来关闭打开的编辑
$('#deleteInfo').click(function(){
	if(judgeBack%2==0)
	{
		$('#inforTable').css('width','900px');
	}
	else
		$('#inforTable').css('width','1123px');
	judgeBack++;
	$('#addInfo').toggle(300);




});





//插入数据
function postData()
{
$.ajax({  //ajax
method : "POST",
url : "http://exp.szer.me/parry/plExp/stuInfoOO/postInfo.php",
dataType:'json',
header : {

},
data : {
	name : $('#name').val(),
	stuno : $('#schoolNum').val(),
	age : $('#age').val(),
	sex : $('#sex').val(),
	score : $('#score').val(),
	grade : $('#schoolYear').val()

},
error : function()
{
	alert('存在空项');
},
success : function(data)
{
	ajaxFlag=0;
    initPage(1,tArray[0][0]); //重新请求数据
    initPagination();
	if(data.retcode==20020000)
     {
		alert(data.retmsg);
	}
	else if(data.retcode==20040301||data.retcode==20020000||data.retcode==20040002)
	{
		alert(data.retmsg);
	}
	clearInfo(); //让添加框清空数据
	$('#refresh').css("backgroundColor","blue");
	setTimeout(function()
	{
		$('#refresh').css("backgroundColor","transparent");
	},400);

	
	
}
});
}
//清空数据
function clearInfo()
{
$('#name').val(""),
	$('#schoolNum').val(""),
	$('#age').val(""),
	$('#sex').val(""),
	$('#score').val(""),
	$('#schoolYear').val("")
}
//提交按钮调用
$('#addInfo button').click(function(){
	$('#addInfoBtn').click(postData());
})



//获取json长度
function getHsonLength(json){
                var jsonLength=0;
                for (var i in json) {
                    jsonLength++;
                }
                return jsonLength;
            }




//最多一万条数据
var tArray = new Array();         //先声明一维
       for(var i=0;i<1000;i++){          //一维长度为1000
          tArray[i]=new Array();    //在声明二维
          for(var j=0;j<2;j++){      //二维长度为2
             tArray[i][j]=i;
       }
}
tArray[0][0] = 999999999;
//页面初始化
var ajaxFlag = 0; //判断是否到最后一页了
function initPage(flag,lastID)
{
$.ajax({  //ajax
method : "GET",
url : "http://exp.szer.me/parry/plExp/stuInfoOO/showInfo.php?offset=10&last_id="+lastID,
dataType:'json',
data : {

},
error : function()
{
	alert('网络出现异常');
},
success : function(data)
{
	if(data.retcode==200)
	{
		readyRender = 1;
	}
	else
	{
		readyRender = 0;
	}
	function initTable(index) //单独加载一行的tr
	{
    document.getElementsByClassName('trToggle')[index-parseInt(index/10)*10].setAttribute('flag',index-parseInt(index/10)*10); //附上flag属性方便后面排序
	var inforTableTR = $('#inforTable tr').eq(index-parseInt(index/10)*10+1); //dom已经创建的tr

  if(getHsonLength(data.retdata.infos)==10) //正常逻辑
{
	 inforTableTR.children('td').eq(0).children('p').html(data.retdata.infos[index].id);
	inforTableTR.children('td').eq(1).html(data.retdata.infos[index].stuno);
	inforTableTR.children('td').eq(2).html(data.retdata.infos[index].name);
	inforTableTR.children('td').eq(3).html(data.retdata.infos[index].age);
	inforTableTR.children('td').eq(4).html(data.retdata.infos[index].sex);
	inforTableTR.children('td').eq(5).html(data.retdata.infos[index].score);
	inforTableTR.children('td').eq(6).html(data.retdata.infos[index].grade);
	
}
else //最后一页逻辑
{
for(var i=0;i<getHsonLength(data.retdata.infos);i++) 
{
	document.getElementsByClassName('trToggle')[i-parseInt(i/10)*10].setAttribute('flag',i-parseInt(i/10)*10); //附上flag属性方便后面排序
	var inforTableTR = $('#inforTable tr').eq(i-parseInt(i/10)*10+1); //dom已经创建的tr
	inforTableTR.children('td').eq(0).children('p').html(data.retdata.infos[i].id);
	inforTableTR.children('td').eq(1).html(data.retdata.infos[i].stuno);
	inforTableTR.children('td').eq(2).html(data.retdata.infos[i].name);
	inforTableTR.children('td').eq(3).html(data.retdata.infos[i].age);
	inforTableTR.children('td').eq(4).html(data.retdata.infos[i].sex);
	inforTableTR.children('td').eq(5).html(data.retdata.infos[i].score);
	inforTableTR.children('td').eq(6).html(data.retdata.infos[i].grade);

}
for(var i=getHsonLength(data.retdata.infos);i<10;i++)
{
	document.getElementsByClassName('trToggle')[i-parseInt(i/10)*10].setAttribute('flag',i-parseInt(i/10)*10); //附上flag属性方便后面排序
	var inforTableTR = $('#inforTable tr').eq(i-parseInt(i/10)*10+1); //dom已经创建的tr
	inforTableTR.children('td').eq(0).children('p').html('');
	inforTableTR.children('td').eq(1).html('');
	inforTableTR.children('td').eq(2).html('');
	inforTableTR.children('td').eq(3).html('');
	inforTableTR.children('td').eq(4).html('');
	inforTableTR.children('td').eq(5).html('');
	inforTableTR.children('td').eq(6).html('');
}	
ajaxFlag=1;
}
 
	}
 

   for(var i=0;i<10;i++) //初始化数据
	{
			initTable(i);
			if(ajaxFlag==1)
				break;
	}

//是否最后的一页的不同处理方式
if(ajaxFlag==0)
{

	if(nowPage0>=3)
   {
   	tArray[nowPage0-1][0] = tArray[nowPage0-3][1];
   	tArray[nowPage0-1][1] = data.retdata.infos[9].id;
   }
   else if(nowPage0<=2)
   {
   	tArray[nowPage0-1][1] = data.retdata.infos[9].id;
   	tArray[nowPage0-1][0] = 999999999;
   }

}
  	else
  	{
  		
    tArray[nowPage0-1][0] = tArray[nowPage0-3][1];
  	}

  }
 

});
}

initPage(1,tArray[0][0]); //默认打开第一页


//换页的按钮与数据变换关联
var lastPage = 1;
var middleFlag = 1;
function initPagination()
{
			$('.M-box').pagination({
    pageCount: 320,  
    count:0,
    keepShowPN:false,  
    prevContent:'上页',
    nextContent:'下页',
    callback:function(index){
    	
         ajaxFlag = 0;
    	  thData[0].style.backgroundColor = "green";
          thData[1].style.backgroundColor = "";
          thData[2].style.backgroundColor = "";
          thData[3].style.backgroundColor = "";

          thData[0].style.color = "white";
          thData[1].style.color = "green";
          thData[2].style.color = "green";
          thData[3].style.color = "green";
          
          thData[0].innerHTML = "编号 ↓"
          thData[1].innerHTML = "年龄 ↕";
          thData[2].innerHTML = "分数 ↕";
          thData[3].innerHTML = "入学年份 ↕"; 


          upDown0=1;//偶数为降，奇数为升
          upDown1=0;//偶数为降，奇数为升
          upDown2=0;//偶数为降，奇数为升
          upDown3=0;//偶数为降，奇数为升
          middleFlag = nowPage0;
          lastPage = middleFlag;
    	nowPage0=index.getCurrent(); //获得当前页面值方便其他函数调用



    	if(nowPage0>=lastPage)
    	{
    		
    			initPage(nowPage0,tArray[nowPage0-2][1]); //新初始化新的数据

    		
    	}   	
    		
    	else if(nowPage0<lastPage)
    	{
    
    		initPage(nowPage0,tArray[nowPage0][0]);

    	}

    	
    	 
    	
    }

	})
	

	
}
$(document).ready(function(){
	initPagination(); //一开始就初始化按钮
})



