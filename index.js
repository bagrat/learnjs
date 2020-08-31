
var state = {
	stage: "intro",
};


window.addEventListener('scroll', function(e) {
	if (state.stage.startsWith('linkDemo') && !state.stage.endsWith("Scrolling")) {
		window.scrollTo({
			top: 0,
			left: 0,
		});
	}
});


function transition(name) {
	if (name == 'linkDemo_Scroll' && state.stage == 'intro') {
		state.stage = 'linkDemo_Scrolling';

		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});

		setTimeout(function() {
			state.stage = 'linkDemo_Scrolled';
			transition('linkDemo_Fadeout');
		}, 400);
	} else if (name == 'linkDemo_Fadeout' && state.stage == 'linkDemo_Scrolled') {
		document.querySelector('.page').classList.add('fade-out-in');

		setTimeout(function() {
			state.stage = 'linkDemo_Faded';
			transition('linkDemo_Emphasize');
		}, 50);
	} else if (name == 'linkDemo_Emphasize' && state.stage == 'linkDemo_Faded') {
		document.querySelectorAll('.page p a').forEach(function(link) {
			link.classList.add('link-emphasize');
		});


		setTimeout(function() {
			state.stage = 'linkDemo_Emphasized';
			transition('linkDemo_Rollback');
		}, 4500);
	} else if (name == 'linkDemo_Rollback' && state.stage == 'linkDemo_Emphasized') {
		document.querySelectorAll('.page p a').forEach(function(link) {
			link.classList.remove('link-emphasize');
		});

		document.querySelector('.page').classList.remove('fade-out-in');

		state.stage = 'linkDemo_Scrolling';

		backPosition = document.querySelector('#linkDemoNav').offsetTop;

		window.scrollTo({
			top: backPosition,
			left: 0,
			behavior: 'smooth',
		});

		setTimeout(function() {
			document.querySelector('#linkDemoNav').classList.add('nav-fade-out');

			setTimeout(function() {
				// document.querySelector('#linkDemoNav').classList.add('nav-colapse');
				state.stage = 'reading';
			}, 1000);
		}, 500);
	} else {
		console.log('Unexpected transition "', name, '" for state "', state.stage, '"')
	}
}
