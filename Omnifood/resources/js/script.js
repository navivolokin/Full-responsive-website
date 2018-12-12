$(document).ready(function(){
   
        // For the sticky navigation //
    $('.js--section-features').waypoint(function(direction){
      if( direction == "down"){
          $('nav').addClass('sticky');
      } else {
         $('nav').removeClass('sticky'); 
      }
  },{
      offset: "25%;"
  }); 
    
    
    // Scroll on buttons //
    $(".js--scroll-to-plans").click(function(){
       $('html,body').animate({scrollTop: $(".js--section-plans").offset().top - 60}, 1000);
        
    });
    $(".js--scroll-to-start").click(function(){
       $('html,body').animate({scrollTop: $(".js--section-features").offset().top - 60}, 1000);
        
    });
    
    // Navigation scroll  //
    
           document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
                });
    
    // Animations on scroll //
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    }); 
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
     
    // Mobile navigation //
    $(".js--nav-icon").click(function(){
       var nav = $(".js--main-nav"); 
        var icon = $(".js--nav-icon i");
        nav.slideToggle(200);
        if( icon.hasClass("ion-md-reorder")){
            icon.removeClass("ion-md-reorder");
            icon.addClass("ion-md-close");
            
        } else{
            icon.addClass("ion-md-reorder");
            icon.removeClass("ion-md-close");
        }
        
        
    });
    

    
    
    
});