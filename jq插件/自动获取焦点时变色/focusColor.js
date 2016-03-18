(function($){
    $.fn.extend({
        "focusColor":function(color){
        var defColor = "#6cf";//默认有焦点的色值
        color = (color ==undefined)?defColor:color;
        
        $(this).find("li").each(
            function () {
                $(this).mouseover(function () {//设置颜色和光标
                    $(this).css({"backgroundColor":color,"cursor":"pointer"});
                });
                $(this).mouseout(function () {
                    $(this).css("background-color", ""); //恢复原来的颜色
                })
            })
        return $(this);
    }
}); 
})(jQuery);