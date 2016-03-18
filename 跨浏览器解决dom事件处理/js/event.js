var eventUtil={
	addEventHandler:function(element,type,handler)
	{
		if(element.addEventListner){
			element.addEventListner(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent('on'+type,handler);
		}else{
			element['on'+type]=handler;
		}
	},
	removeEventHandler:function(element,type,handler)
	{
		if(element.removeEventListner){
			element.removeEventListner(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent('on'+type,handler);
		}else{
			element['on'+type]=null; 
		}
	},
	getEvent:function(event){
		return event ? event : window.event;
	},
	getType:function(event){
		return event.type;
	},
	getElement:function (event) {
		return event.target||event.srcElement;
	},
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},
	stopPropagation:function(event){
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	}
}
