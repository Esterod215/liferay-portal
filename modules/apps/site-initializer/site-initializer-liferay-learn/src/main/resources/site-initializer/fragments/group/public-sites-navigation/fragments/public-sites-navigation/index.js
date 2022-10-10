var menuButtonGroup = fragmentElement.querySelector('.menu-button-group');

var tabletMobileNavSection = fragmentElement.querySelector('.tablet-mobile-nav-section');

var menuBtn = fragmentElement.querySelector('.menu-btn');

var closeBtn = fragmentElement.querySelector('.close-btn');

const accountMenu = fragmentElement.querySelector('.account-info');

const dropdownContent = fragmentElement.querySelector('.dropdown-content');

menuBtn.addEventListener('click', function() {
	menuButtonGroup.classList.toggle('menu-open');
	tabletMobileNavSection.classList.toggle('menu-open');
});

closeBtn.addEventListener('click', function() {
	menuButtonGroup.classList.toggle('menu-open');
	tabletMobileNavSection.classList.toggle('menu-open');
});

function showAccountDropdown() {
	dropdownContent.classList.toggle('show');
	dropdownContent.classList.toggle('text-primary');
	accountMenu.classList.toggle('text-primary');
}

accountMenu.addEventListener('click', showAccountDropdown);