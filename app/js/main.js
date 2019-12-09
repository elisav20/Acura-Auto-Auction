let click = 1;

$(".menu__search-btn").on('click', function(){
    if (click === 1) {
        $(".close__icon").show();
        $(".search__icon").hide();
        click = 0;
    } else {
        $(".search__icon").show();
        $(".close__icon").hide();
        click = 1;
    }
});

;(function($) {
    $window = $(window);

    $('*[data-type="parallax"]').each(function(){

        var $bgobj = $(this);

        $(window).scroll(function() {

            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            var coords = '50% '+ yPos + 'px';

            $bgobj.css({ backgroundPosition: coords });

        });
    });
})(jQuery);

$('.select2').select2({
});


 $(document).on("click.bs.dropdown.data-api", ".noclose", function (e) { e.stopPropagation() });

 $( document ).ready(function () {
  $(".moreBox").slice(0, 4).show();
    if ($(".carBox:hidden").length != 0) {
      $("#loadMore").show();
    }   
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".moreBox:hidden").slice(0, 4).slideDown();
      if ($(".moreBox:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    });
  });

$('.owl-carousel').owlCarousel({
    animateIn: 'fadeIn',
    loop: true,
    items: 1,
    margin: 10,
    nav: true,
    navText : ["",""],
    rewindNav : true,
    autoplay: true
})