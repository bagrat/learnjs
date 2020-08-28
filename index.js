
var state = {
	stage: "intro",
};


window.addEventListener('scroll', function(e) {
	if (["linkDemo_Faded", "linkDemo_Emphasized"].includes(state.stage)) {
		window.scrollTo({
			top: 0,
			left: 0,
		});
	}
});


function transition(name) {
	if (name == 'linkDemo_Scroll' && state.stage == 'intro') {
		state.stage = 'linkDemo_Scrolled';

		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});

		setTimeout(function() {
			transition('linkDemo_Fadeout');
		}, 400);
	} else if (name == 'linkDemo_Fadeout' && state.stage == 'linkDemo_Scrolled') {
		document.querySelector('.page').classList.add('fade-out-in');

		state.stage = 'linkDemo_Faded';

		setTimeout(function() {
			transition('linkDemo_Emphasize');
		}, 50);
	} else if (name == 'linkDemo_Emphasize' && state.stage == 'linkDemo_Faded') {
		document.querySelectorAll('.page p a').forEach(function(link) {
			link.classList.add('link-emphasize');
		});

		state.stage = 'linkDemo_Emphasized';

		setTimeout(function() {
			transition('linkDemo_Rollback');
		}, 7000);
	} else if (name == 'linkDemo_Rollback' && state.stage == 'linkDemo_Emphasized') {
		document.querySelectorAll('.page p a').forEach(function(link) {
			link.classList.remove('link-emphasize');
		});

		document.querySelector('.page').classList.remove('fade-out-in');

		state.stage = 'reading';
	} else {
		console.log('Unexpected transition "', name, '" for state "', state.stage, '"')
	}
}
