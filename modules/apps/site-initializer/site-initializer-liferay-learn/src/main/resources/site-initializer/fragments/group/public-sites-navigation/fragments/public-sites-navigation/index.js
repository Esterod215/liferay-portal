const accountMenu = fragmentElement.querySelector('.account-info');
const dropdownContent = fragmentElement.querySelector('.dropdown-content');
console.log(fragmentElement);
function showAccountDropdown() {
	dropdownContent.classList.toggle('show');
	dropdownContent.classList.toggle('text-primary');
	accountMenu.classList.toggle('text-primary');
}

accountMenu.addEventListener('click', showAccountDropdown);
