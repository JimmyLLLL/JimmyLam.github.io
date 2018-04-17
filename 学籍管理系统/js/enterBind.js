/*
* @Author: JimmyLLLL
* @Date:   2018-04-13 00:00:27
* @Last Modified by:   JimmyLLLL
* @Last Modified time: 2018-04-13 00:09:49
*/
$('#searchText').bind('keypress', function (event) {
            if (event.keyCode == "13") {
                deleteData();
            }
        });
$('.addInClass').bind('keypress', function (event) {
            if (event.keyCode == "13") {
               postData();
            }
        });