$(function zoomMagnify() {
    $('.product-wrapper a').click(function() {
        $('.image-zoom img').attr('src', $(this).find('img').attr('src'));
        $('.image-zoom').show();
        $('.product-wrapper').css('display','none');
        return false;
    });

    $('.image-zoom').mousemove(function(e){
        var h = $(this).find('img').height();
        var vptHeight = $(document).height();
        var y = -((h - vptHeight)/vptHeight) * e.pageY;

        $('div img').css('top', y + "px");
    });

    $('.image-zoom').click(function(){
        $('.image-zoom').hide();
         $('.product-wrapper').css('display','block');
    });
});

export { zoomMagnify };

