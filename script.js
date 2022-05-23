$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("bg-rose-600");
            $('.navbar').addClass("pt-1");
            $('.navbarspan').removeClass("text-rose-600");
            $('ul li a').addClass("md:hover:text-blue-600");
            $('.go-to-top').removeClass("hidden");
            $('.navbar').addClass("shadow-xl shadow-gray-900");


            

        }
        else{
            $('.navbar').removeClass("bg-rose-600");
            $('.navbar').removeClass("pt-1");
            $('.navbarspan').addClass("text-rose-600");
            $('ul li a').removeClass("md:hover:text-blue-600");
            $('.go-to-top').addClass("hidden");
            $('.navbar').removeClass("shadow-xl shadow-gray-900");
            
        }

    });

    // typed Animation script

    var typed = new Typed(".typing", {
        strings: ["Developer","Freelancer","Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer","Freelancer","Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    

    

});

function menuBtn() {
    var element = document.getElementById("mobnav");
     element.classList.toggle("active");
   } 




  $('.owl-carousel').owlCarousel({
    
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
