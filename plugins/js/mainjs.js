 ///********owlCarousel*********/

 
        jQuery(document).ready(function ($) {
            $('.brands_slider').owlCarousel({
                center: true,
                items: 8,
                //stagePadding: 10,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                nav: true,
                margin: 10,

                stopOnHover: true,
                responsiveClass: true,
                navText: [

                    "<i class='fas fa-chevron-left'></i>",
                    "<i class='fas fa-chevron-right'></i>"
                  
                ],
                //responsive: {

                //    600: {

                //        items: 5
                //    }
                //}
                responsive: {
                    0: {
                        items: 1,
                        
                    },
                    600: {
                        items: 3,
                       
                    },
                    1000: {
                        items: 5,
                       
                       
                    }
                }
            });

        });

$('#A6SectionCarousal').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    //items: 2,
    stopOnHover: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 1,

        },
        1000: {
            items: 2,


        }
    }

})

$('#owl-sliderCarousal').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    //items: 4,
    stopOnHover: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 2,

        },
        1000: {
            items: 4,


        }
    }
})


$('.collapsicon').click(function () {
    $(this).find('i').toggleClass('fas fa-plus fas fa-minus')
});

$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 500,
    grid: false,
    prefix: "$"

});


$('.view-md2').click(function () {
    const myElement = document.getElementById('productcollectionView');
    for (let i = 0; i < myElement.children.length; i++) {

        myElement.children[i].setAttribute('class', "col-6 col-sm-6 col-md-6 view-image2")
    }
});

$('.view-md3').click(function () {

    const myElement = document.getElementById('productcollectionView');
    for (let i = 0; i < myElement.children.length; i++) {

        myElement.children[i].setAttribute('class', "col-4 col-sm-4 col-md-4 view-image3")
    }
});

$('.view-md4').click(function () {

    const myElement = document.getElementById('productcollectionView');
    for (let i = 0; i < myElement.children.length; i++) {

        myElement.children[i].setAttribute('class', "col-3 col-sm-3 col-md-3 view-image4")
    }
});
$('.view-md6').click(function () {

    const myElement = document.getElementById('productcollectionView');
    for (let i = 0; i < myElement.children.length; i++) {

        myElement.children[i].setAttribute('class', "col-2 col-md-2 view-image6")
    }
});
$('.view-mobil1').click(function () {

    const myElement = document.getElementById('productcollectionView');
    for (let i = 0; i < myElement.children.length; i++) {

        myElement.children[i].setAttribute('class', "col-12 col-sm-12 view-imagemobil")
    }
});
$('.view-horizontal').click(function () {

    const myElement = document.getElementById('productcollectionView');
    for (let i = 0; i < myElement.children.length; i++) {

        myElement.children[i].setAttribute('class', "col-12 col-sm-12 col-md-12 productViewlist")
    }
});
