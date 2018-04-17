/*
* @Author: JimmyLLLL
* @Date:   2018-04-09 23:05:22
* @Last Modified by:   JimmyLLLL
* @Last Modified time: 2018-04-17 16:08:09
*/
/*删除*/
/*点击删除按钮调用删除函数*/
$('#searchButton').click(function(){
	deleteData();
})
//删除函数
function deleteData()
{
$.ajax({  //ajax
method : "POST",
url : "http://exp.szer.me/parry/plExp/stuInfoOO/deleteInfo.php",
dataType:'json',
header : {

},
data : {
	id : $('#searchText').val() //输入需要删除数值的id
},
error : function()
{
	alert('此编号未登记');
},
success : function(data)
{
	$('.trToggle').remove(); 
    initPage(nowPage0);   //初始化界面
	if(data.retcode==20020000)
     {
		alert(data.retmsg);
	}
	else if(data.retcode==20040301||data.retcode==20020000||data.retcode==20040002)
	{
		alert(data.retmsg);
	}
	$('#searchText').val(""); //清空搜索框
	
}
});
}







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
	$('.trToggle').remove();
    initPage(1);
	if(data.retcode==20020000)
     {
		alert(data.retmsg);
	}
	else if(data.retcode==20040301||data.retcode==20020000||data.retcode==20040002)
	{
		alert(data.retmsg);
	}
	clearInfo();
	
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
//按钮调用
$('#addInfo button').click(function(){
	$('#addInfoBtn').click(postData());
})










//获取资源
//页资源的初始化
//右边0为上一组的最后一个值，1为这一组的最后一个值，2为上上一组的最后一个值，用来初始化上一组
function initPage(flag)
{
$.ajax({  //ajax
method : "GET",
url : "http://exp.szer.me/parry/plExp/stuInfoOO/showInfo.php?offset=50",
dataType:'json',
data : {

},
error : function()
{
	alert('网络出现异常');
},
success : function(data)
{
	function initTable(index)
	{

    $('#inforTable').append('<tr class="trToggle"></tr>');
    document.getElementsByClassName('trToggle')[index-parseInt(index/10)*10].setAttribute('flag',index-parseInt(index/10)*10);
	var inforTableTR = $('#inforTable tr').eq(index-parseInt(index/10)*10+1);
	if(data.retdata.infos[index]!=null)
	{
	inforTableTR.append('<td>'+ data.retdata.infos[index].id +'</td>');
	inforTableTR.append('<td>'+ data.retdata.infos[index].stuno +'</td>');
	inforTableTR.append('<td>'+ data.retdata.infos[index].name +'</td>');
	inforTableTR.append('<td>'+ data.retdata.infos[index].age +'</td>');
	inforTableTR.append('<td>'+ data.retdata.infos[index].sex +'</td>');
	inforTableTR.append('<td>'+ data.retdata.infos[index].score +'</td>');
	inforTableTR.append('<td>'+ data.retdata.infos[index].grade +'</td>');
    }
	}
	var i=0;
	for(i=(i+(flag-1)*10);i<(10+(flag-1)*10);i++)
	{
		initTable(i);
		/*console.log(document.getElementsByClassName('trToggle')[i-parseInt(i/10)*10].getAttribute("flag"));*/
	}
	document.getElementsByClassName('trToggle')[0]=document.getElementsByClassName('trToggle')[1];
}

});
}
initPage(1);

var nowPage0=1;
//换页的按钮与数据变换关联
function initPagination()
{
	$('.M-box').pagination({
    pageCount:5,
    keepShowPN:true,
    jump:true,
    /*coping:true,*/
    prevContent:'上页',
    nextContent:'下页',
    callback:function(index){
    	nowPage0=index.getCurrent();
    	document.getElementById('boxRadio1').click();
    	$('.trToggle').remove();
    		initPage(index.getCurrent());
    		upDown=1;
    		$('#Updown').html('降序↓');
    }

});
}
$(document).ready(function(){
	initPagination();
})



