;
(function(mothed) {
	mothed(window, window.document, jQuery);
}(function(win, doc, $) {
	var aindex;
	$.fn.Acreate = function(quantity = 5) {
		if(!isNaN(quantity)) {
			var quantity2 = quantity * 2;
			//第一个星星的宽度
			var width = 16;
			var satrvessel = $("<div id='satrvessel'/>");
			var grade = $("<div id='grade'>您的评分： <span id='msg'></span>分</div>");
			var comment = $("<div id='comment'></div>");
			for(var i = 1; i <= quantity2; i++) {
				$("<a href='##' style='left:0px; width:" + (width * i) + "px;z-index:" + (quantity2 - (i - 1)) + "' class/>")
					.data("index", i)
					.mouseover(function() {
						$(this).addClass("clibg");
						$("#satrvessel a").removeClass("clibgs");
						$("#msg").html($(this).data("index") / 2);
					}).mouseout(function() {
						$("#satrvessel a").removeClass("clibg");
						if(aindex >= 0) {
							$("#satrvessel").find("a").eq(aindex-1).addClass("clibgs");
							$("#msg").html(aindex/2);
						}else{
							$("#msg").html("");
						}
					}).click(function() {
						aindex = $(this).data("index");
						$(this).addClass("clibgs");
						$("#msg").html(aindex / 2);
					}).appendTo(satrvessel);
				$(satrvessel).width(width * i);
			};
			$("#star").append(satrvessel).append(grade).append(comment);
		} else {
			alert("请在Acreate方法中输入正确的星星个数！");
		};

	};
}));