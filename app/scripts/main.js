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

        $('.feature .owl-carousel .item').on('mouseenter', function(e) {
            var offset = $(this).offset();

            if (offset.left >= 861.5) {
                $(this).find(".feature-qr").css({
                    left: '-100%'
                }).show();
            } else {
                $(this).find(".feature-qr").css({
                    left: '100%'
                }).show();
            }

            $(this).find(".feature-qr").velocity({
                opacity: 1
            });
        });

        $('.feature .owl-carousel .item').on('mouseleave', function(e) {
            var offset = $(this).offset();
            var _this = $(this);
            $(this).find(".feature-qr").velocity({
                opacity: 0
            }, {
                complete: function() {
                    _this.find(".feature-qr").css({
                        left: '0%',
                        right: '0%'
                    });
                    _this.find(".feature-qr").hide();
                }
            });
        });

        $('#page-nav .nav a').on('click', function(e){
        	e.preventDefault();
        	var target = $(this).attr('href');

        	$(target).velocity('scroll');
        });
    });
})(jQuery);
