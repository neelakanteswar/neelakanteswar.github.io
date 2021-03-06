$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

$( document ).ready(function() {
    $('.neel2').hide();
    $('.neel3').hide();
});

$(window).scroll(function(){
    $('.neel1').hide();
    $('.neel2').show();
});

$(window).scrollEnd(function(){
    $('.neel1').show();
    $('.neel2').hide();
}, 700);

window.onwheel = (scroll) => {
  if(scroll.deltaY > 0) {
    $(".neel2").addClass("flip");
  }
  else if(scroll.deltaY < 0) {
  	$(".neel2").removeClass("flip");
  }
}
