$(document).ready(function(){
    $('.webCon').slick({
        prevArrow:$('.arrowL'),
        nextArrow:$('.arrowR'),
        //autoplay:true,
        //autoplaySpeed:2000,
    });
    
    $('.dCon').slick({
        prevArrow:$('.arrowL2'),
        nextArrow:$('.arrowR2'),
        //autoplay:true,
        //autoplaySpeed:2000,
    });
    $(".emailIco").on("click",function(){
        $(".gform").slideToggle('slow')
    })
})