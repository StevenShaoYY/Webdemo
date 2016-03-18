window.onload= function () {
	var go = document.getElementById('go'),
		box = document.getElementById('box');
	eventUtil.addEventHandler(box,'click',function(){
		alert('我是整个父盒子');
	})

	eventUtil.addEventHandler(go,'click',function (e) {
		e = eventUtil.getEvent(e);
		eventUtil.preventDefault(e); 
		eventUtil.stopPropagation(e);
	})
}