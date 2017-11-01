/*
 * 设置一个事件监听器，需要完成以下要求：
 * 1、触发事件的目标元素为 #target
 * 2、监听的是一个 click 事件
 * 3、当事件触发时，设置文字颜色为 red
 */

/*通过 document.getElementById 获取指定 ID 的元素
*通过使用方法 addEventListener 进行事件绑定
*设置绑定的事件名称，即 click
*事件触发时，通过使用 this 获取事件触发的元素对象。其设置其属性style 来改变字体颜色
*/
var chipelly= document.getElementById('chipelly');
chipelly.addEventListener('click', function() {
	this.style.color= 'green';
}, false);

var initial_text= document.getElementsByClassName('initial_text');
initial_text.addEventListener('onclick', function() {
	this.style.color= 'grey';
}, false);
