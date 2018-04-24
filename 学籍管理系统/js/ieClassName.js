/*
* @Author: JimmyLLLL
* @Date:   2018-04-18 20:17:03
* @Last Modified by:   JimmyLLLL
* @Last Modified time: 2018-04-18 20:58:23
*/
//兼容ie浏览器没法使用getElementByClassName
if(!document.getElementsByClassName){   
document.getElementsByClassName = function(className, element){   
var children = (element || document).getElementsByTagName('*');   
var elements = new Array();   
for (var i=0; i<children.length; i++){   
var child = children[i];   
var classNames = child.className.split(' ');   
for (var j=0; j<classNames.length; j++){   
if (classNames[j] == className){   
elements.push(child);   
break;   
}   
}   
}   
return elements;   
};   
} 