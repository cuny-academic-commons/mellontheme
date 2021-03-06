jQuery(document).ready(function($) {
	//resize bloglist images to fit the image container
	$('#bloglist').imagesLoaded(function() {
		$('img.bloglist-thumbnail').each(function() {
			var originalDimensions = getOriginalDimensionsOfImg(this);
			var tw = $(this).parents("div").width();
			var th = $(this).parents("div").height();
			var result = ScaleImage(originalDimensions.width, originalDimensions.height, tw, th, false);
			$(this).css("width",result.width);
			$(this).css("height",result.height);
			$(this).css("left", result.targetleft);
			$(this).css("top", result.targettop/2);
		});
	});
});