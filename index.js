const $screen1Btn = document.querySelector('.screen1__arrow');
const $screen2    = document.querySelector('.screen2');

$screen1Btn.addEventListener('click', (e) => {
	if (e.target.classList.contains('screen1__arrow')) {

		if (e.target.classList.contains('rotate-up')) {
			// Sube
			e.target.classList.remove('rotate-up');
			$screen2.classList.remove('move-down');
			e.target.classList.add('rotate-down');
			$screen2.classList.add('move-up');
		} else {
			// Baja
			if (e.target.classList.contains('rotate-down')) {
				e.target.classList.remove('rotate-down');
				$screen2.classList.remove('move-up');
			}
			e.target.classList.add('rotate-up');
			$screen2.classList.add('move-down');
		}
	}
});