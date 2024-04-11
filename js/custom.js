$(document).ready(function(){

    $('.testimonials_section').slick({
        slidesToShow: 1,
        slidesToScroll:1,
        centerMode: true,
        centerPadding: '300px',
        speed: 2000,
        autoplay: false,
        arrows:true,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                 settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        speed:2000,
                        infinite: true,
                        arrows:false,
                        dots: false
                    }
            },
          
            {
                breakpoint: 767,
                 settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
			centerPadding: '100px',
                        infinite: true,
                        arrows:false,
                        dots:false
                    }
            },
            {
                breakpoint: 480,
                 settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
			centerPadding: '50px',
                        infinite: true,
                        arrows:false,
                    }
            }
        ]
    });	

    $('.logo_slider').slick({
        slidesToShow: 6,
        slidesToScroll:1,
        speed: 2000,
        autoplay: false,
        arrows:false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                 settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        speed:2000,
                        infinite: true,
                        arrows:false,
                        dots: false
                    }
            },
          
            {
                breakpoint: 767,
                 settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows:false,
                        dots:false
                    }
            },
            {
                breakpoint: 480,
                 settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows:false,
                    }
            }
        ]
    });	

});

/*********accrodian*********/
$(document).ready(function () {
	$(".set > a").on("click", function () {
		if ($(this).hasClass("active")) {
            $(this).parent(".set").removeClass("active");
			$(this).removeClass("active");
			$(this)
				.siblings(".content")
				.slideUp(200);
			$(".set > a i")
				.removeClass("fa-minus")
				.addClass("fa-plus");
		} else {
            $(this).parent(".set").addClass("active");
			$(".set > a i")
				.removeClass("fa-minus")
				.addClass("fa-plus");
			$(this)
				.find("i")
				.removeClass("fa-plus")
				.addClass("fa-minus");
			$(".set > a").removeClass("active");
			$(this).addClass("active");
			$(".content").slideUp(200);
			$(this)
				.siblings(".content")
				.slideDown(200);
		}
	
    });
});
