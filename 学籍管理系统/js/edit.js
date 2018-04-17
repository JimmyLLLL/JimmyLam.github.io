/*
* @Author: JimmyLLLL
* @Date:   2018-04-14 21:39:04
* @Last Modified by:   JimmyLLLL
* @Last Modified time: 2018-04-14 23:11:18
*/
$('#showDelete').click(function(){
	$('#search').toggle(200);

})
var judgeBack = 0;
$('#addNew').click(function(){
	if(judgeBack%2==0)
	{
		$('#inforTable').css('width','900px');
	}
	else
		$('#inforTable').css('width','1203px');
	judgeBack++;
	$('#addInfo').toggle(300);
})