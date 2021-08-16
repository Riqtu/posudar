let container = document.getElementById("modalBlock")

container.innerHTML = `

<div class="modal" id="auth">
			<form action="">
				<img src="/images/logo.png" alt="" />
				<h2>Добро пожаловать!</h2>
				<label for="">Логин</label>
				<input type="text" name="" id="" placeholder="Логин..." />
				<label for="">Пароль</label>
				<input type="text" name="" id="" placeholder="Пароль..." />
				<button>Войти</button>
				<h2 id="regLink">Регистрация</h2>
			</form>
		</div>

		<div class="modal" id="reg">
			<form action="">
				<img src="/images/logo.png" alt="" />
				<h2>Регистрация</h2>
				<label for="">Email</label>
				<input type="text" name="" id="" placeholder="Email..." />
				<label for="">Пароль</label>
				<input type="text" name="" id="" placeholder="Пароль..." />
				<label for="">Повтор пароля</label>
				<input type="text" name="" id="" placeholder="Пароль..." />
				<button type="button" id="regSuccessBtn">Регистрация</button>
				<h2 id="authLinkModal">Вход</h2>
			</form>
		</div>

		<div class="modal" id="regSuccess">
			<form action="">
				<img src="/images/logo.png" alt="" />
				<h2>Регистрация</h2>
				<img src="/images/icons/success.svg" alt="" />
				<h2>Успешно!</h2>
				<p>Для подтверждения мы выслали письмо на указанную почту</p>
				<button id="regSuccessCloseBtn">Продолжить</button>
			</form>
		</div>
`
