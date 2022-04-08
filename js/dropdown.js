const $language = document.getElementById('language');
const $listLanguage = document.getElementById('list-language');

$listLanguage.style.display = 'none';

$language.addEventListener('mouseover', () => {
	$listLanguage.style.display = 'flex';
});

$language.addEventListener('mouseleave', () => {
	$listLanguage.style.display = 'none';
});
