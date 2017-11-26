$(document).ready(function() {

  $(window).scroll(function(){
    // jQuery Function Number 1
    if ($(window).scrollTop() > $("#ld-photo-title").offset().top){
      // jQuery Function Number 2
      $('.navbar').fadeIn();
    }
    if ($(window).scrollTop() < $("#ld-photo-title").offset().top){
      // jQuery Function Number 3
      $('.navbar').fadeOut();
    }
  });

  // jQuery Function Number 4
  $(".link-home").click(function () {
    // jQuery Function Number 5
    $('.navbar').css("display", "none");
  })

});
