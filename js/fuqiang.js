// 鼠标点击特效
var mouseSum = 0;
jQuery(document).ready(function($){
    $("body").click(function(e){
        var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");//可以自定义更换文字
        var $i = $("<span/>").text(a[mouseSum]);
        mouseSum = (mouseSum + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 9999999,
            "top": y - 20,
            "left": x-10,
            "position": "absolute",
            "font-weight": "bold",
            "color": "red"  ////可以自定义更换色值
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
}); 
