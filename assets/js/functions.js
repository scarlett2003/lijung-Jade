$( document ).ready(function() {

  	$('.backTop').each(function(){

  		var el = scrollabelElement('html', 'body');

  		$(this).on('click', function(event){
  			event.preventDefault();
  			$(el).animate({ scrollTop: 0 }, 250);
  		});

  	});

  	function scrollabelElement(){

  		var i, len, el, $el, scrollabel;
  		for (i = 0, len = arguments.length; i < len; i++) {
  			el = arguments[i],
  			$el = $(el);

  			if ($el.scrollTop() > 0){
  				return el;
  			} else {
  				$el.scrollTop(1);
  				scrollable = $el.scrollTop() > 0;
  				$el.scrollTop(0);
  				if (scrollabel) {
  					return el;
  				}
  			}
  		}
  		return [];
  	}

});
