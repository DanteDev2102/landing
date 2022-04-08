const $container = document.getElementById('accordion');
const $accordions = $container.children;

$container.addEventListener('click', (e) => {
	for (let i = 0; i < $accordions.length; i++) {
		if ($accordions[i].open && e.target.id !== i.toString()) {
			$accordions[i].open = false;
		}
	}
});
