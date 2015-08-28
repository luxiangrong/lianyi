(function($) {
    $(document).ready(function() {
        $('.top-banner .owl-carousel').owlCarousel({
            mouseDrag: false,
            dots: true,
            nav: true,
            navText: ['', ''],
            loop: true,
            margin: 0,
            items: 1
        });
        $('.feature .owl-carousel').owlCarousel({
            mouseDrag: false,
            dots: false,
            nav: true,
            navText: ['', ''],
            loop: true,
            margin: 0,
            items: 3
        });
        $('.qa .owl-carousel').owlCarousel({
            mouseDrag: false,
            dots: true,
            nav: true,
            navText: ['', ''],
            loop: true,
            margin: 0,
            items: 1
        });

        $('.feature .owl-carousel .owl-item img').on('mouseover', function(e) {

            var owlItem = $(this).closest('.owl-item');

            if(owlItem.index('.active') == 5) {
                owlItem.find(".feature-qr").css({
                    left: '-100%'
                }).show();
            } else {
                owlItem.find('.feature-qr').css({
                    left: '100%'
                }).show()
            }

            owlItem.find('.feature-qr').velocity({
                opacity: 1
            },{
                duration: 10
            })
        });

        $('.feature .owl-carousel .owl-item img').on('mouseout', function(e) {
            var _this = $(this);

            var owlItem = $(this).closest('.owl-item');

            owlItem.find('.feature-qr').velocity({
                opacity: 0
            }, {
                duration: 10,
                complete: function() {
                    owlItem.find(".feature-qr").css({
                        left: "0%",
                        right: "0%"
                    }), owlItem.find(".feature-qr").hide()
                }
            })
        });

        $('#page-nav .nav a').on('click', function(e){
        	e.preventDefault();
        	var target = $(this).attr('href');

        	$(target).velocity('scroll');
        });
    });
})(jQuery);
