  /* The script below activates hashChange event handler */

  (function() {
    var items = document.querySelectorAll('.blog__item');
    var tags = document.querySelectorAll('.tags a');

    if (!items.length) { return; }

    function filter() {
      var selector = /^#tag-/.test(location.hash) ? location.hash.replace('#', '.') : false;

      if (selector) {
        [].forEach.call(tags, function(i){
          i.removeAttribute('data-active');
        });

        [].forEach.call(document.querySelectorAll(selector), function(i) {
          i.setAttribute('data-active', true);
        });

        if (selector === '.tag-all') {
          [].forEach.call(items, function(i){
            i.style.display = 'block';
          });
        } else {
          [].forEach.call(items, function(i){
            i.style.display = 'none';
          });

          [].forEach.call(document.querySelectorAll(selector), function(i){
            i.style.display = 'block';
          });
        }
      }

      return false;
    }

    window.addEventListener('hashchange', filter);

    filter();
  }());


/* Hereby I solemnly swear, Code below is mostly copied one, for google analytics and tags hashchanges */

if (typeof window.console === 'object' && typeof window.console.log === 'function') {
	window.console.log('Greetings!');
}

// Error logging
window.onerror = function(msg, url, line){
	window.ga('send', 'event', {
		'eventCategory': 'Errors',
		'eventAction': url+':'+line+' Error: '+msg+' '
	});
};


if (typeof document.addEventListener === 'function') {

	// Download logging
	document.addEventListener('click', function(e) {
		if(e.target && e.target.href && /\.zip$/i.test(e.target.href)) {
			window.ga('send', 'event', {
				'eventCategory': 'Downloads',
				'eventAction': e.target.href
			});
		}
	});


	// Filter by tag for archive page
	(function() {
		var items = document.querySelectorAll('.archive__item');
		var tags = document.querySelectorAll('.tags a');

		if (!items.length) { return; }

		function filter() {
			var selector = /^#tag-/.test(location.hash) ? location.hash.replace('#', '.') : false;

			if (selector) {
				[].forEach.call(tags, function(i){
					i.removeAttribute('data-active');
				});

				[].forEach.call(document.querySelectorAll(selector), function(i) {
					i.setAttribute('data-active', true);
				});

				if (selector === '.tag-all') {
					[].forEach.call(items, function(i){
						i.style.display = 'block';
					});
				} else {
					[].forEach.call(items, function(i){
						i.style.display = 'none';
					});

					[].forEach.call(document.querySelectorAll(selector), function(i){
						i.style.display = 'block';
					});
				}
			}

			return false;
		}

		window.addEventListener('hashchange', filter);

		filter();
	}());
}

$(function () {

	window.setTimeout(function () {
		$('.projects-help').toggle(1000);
	}, 10000);

	$('.project-item').on('click', function (e) {

		var thisItemDescription = $(this).find('.project-item-description');
		var alreadyOpen = $(this).find('.project-item-description').hasClass('open');
		var openItem = $('.project-item-description.open');
		openItem.removeClass('open').slideUp(600);

		if (!alreadyOpen) {
			thisItemDescription.addClass('open').slideDown(600);
		}
	});
});
