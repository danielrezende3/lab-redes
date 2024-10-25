const fundoAvisoCookies = document.getElementById('fundo-aviso-cookies');
if (!Cookies.get(location.hostname)) {
	document.querySelector(".box-cookies").classList.remove('hide');
	fundoAvisoCookies.classList.add('ativo');
	document.body.style.overflow = 'hidden';
	bloqueiaTab();
}
function bloqueiaTab() {
	window.addEventListener('keydown', function(e) {
		if (e.key == 'Tab')
			e.preventDefault();
		else
			return true;
	});
}
const acceptCookies = () => {
	window.location.reload();
	document.body.style.overflow = 'scroll';
	document.querySelector(".box-cookies").classList.add('hide');
	var expires = { expires: 1 }; //expira em 1 dia
	var nomeCookie = location.hostname;
	if (nomeCookie === 'localhost') {
		Cookies.set(nomeCookie, 'cookieUfs', expires, { path: '' });
	} else {
		Cookies.set(nomeCookie, 'cookieUfs', expires, { path: '' }, { domain: nomeCookie });
	}

	fundoAvisoCookies.classList.remove('ativo');
};

const btnCookies = document.querySelector(".btn-cookies");

btnCookies.addEventListener('click', acceptCookies);





