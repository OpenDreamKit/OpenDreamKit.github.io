/*Carousel 1*/
 $(document).ready(function() {
    $('.carousel1').carousel1({interval: 2000});
  });

/*Carousel 2*/

 $(document).ready(function () {
    $('#eventCarousel').carousel2({
        interval: 2000
    })
    $('.carousel-inner2 .item2').each(function () {
        var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
    	next = $(this).siblings(':first');
  	}

    next.children(':first-child').clone().appendTo($(this));
  }
    });
});