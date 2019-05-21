$(document).on('ready', function() {
    console.log('jQuery load!!!');
	var $element = $('input[type="range"]');
	$element
	  .rangeslider({
	    polyfill: false,
	    onInit: function() {
	      var $handle = $('.rangeslider__handle', this.$range);
	      updateHandle($handle[0], this.value);
	    }
	  })
	  .on('input', function(e) {
	    var $handle = $('.rangeslider__handle', e.target.nextSibling);
	    updateHandle($handle[0], this.value);
	  });

	function updateHandle(el, val) {
	  el.textContent = val;
	}

  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    mobileFirst: true
  });
});