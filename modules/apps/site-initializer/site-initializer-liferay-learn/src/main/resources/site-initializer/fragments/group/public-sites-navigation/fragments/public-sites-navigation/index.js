var menuButtonGroup = fragmentElement.querySelector('.menu-button-group');

var tabletMobileNavSection = fragmentElement.querySelector('.tablet-mobile-nav-section');

var menuBtn = fragmentElement.querySelector('.menu-btn');

var closeBtn = fragmentElement.querySelector('.close-btn');

menuBtn.addEventListener('click', function() {
	menuButtonGroup.classList.toggle('menu-open');
	tabletMobileNavSection.classList.toggle('menu-open');
});

closeBtn.addEventListener('click', function() {
	menuButtonGroup.classList.toggle('menu-open');
	tabletMobileNavSection.classList.toggle('menu-open');
});