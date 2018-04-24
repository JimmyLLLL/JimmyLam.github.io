/*
* @Author: JimmyLLLL
* @Date:   2018-04-14 21:39:04
* @Last Modified by:   JimmyLLLL
* @Last Modified time: 2018-04-20 00:26:05
*/
//点击删除按钮出现删除界面
$('#showDelete').click(function(){
	$('#search').toggle(200);

})
var judgeBack = 0; //进退判断需要数据
//添加信息界面弹出以及表格信息缩进去张开来逻辑
$('#addNew').click(function(){
	if(judgeBack%2==0)
	{
		$('#inforTable').css('width','900px');
	}
	else
		$('#inforTable').css('width','1123px');
	judgeBack++;
	$('#addInfo').toggle(300);
})