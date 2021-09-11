let container = document.getElementById('modalBlock')
import logo from './../images/logo.png'
if (container)
  container.innerHTML = `

<div class="modal" id="auth">
			<form action="">
				<img src="${logo}" alt="" />
				<h2>Добро пожаловать!</h2>
				<label for="">Логин</label>
				<input type="text" name="" id="" placeholder="Логин..." />
				<label for="">Пароль</label>
				<input type="text" name="" id="" placeholder="Пароль..." />
				<a href='/screens/userAccount-orders.html'><button type='button'>Войти</button></a>
				<h2 id="regLink">Регистрация</h2>
			</form>
		</div>

		<div class="modal" id="reg">
			<form action="">
				<img src="${logo}" alt="" />
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
				<img src="${logo}" alt="" />
				<h2>Регистрация</h2>
				<img src="/images/icons/success.svg" alt="" />
				<h2>Успешно!</h2>
				<p>Для подтверждения мы выслали письмо на указанную почту</p>
				<button id="regSuccessCloseBtn" type="button">Продолжить</button>
			</form>
		</div>
		<div class="modal" id="updInfoModal">
		<form action="">
			<label for="">ФИО</label>
			<input type="text" name="" id="" placeholder="ФИО..." />
			<label for="">Email</label>
			<input type="text" name="" id="" placeholder="Email..." />
			<label for="">Телефон</label>
			<input type="text" name="" id="" placeholder="Телефон..." />
			<label for="">Адрес</label>
			<input type="text" name="" id="" placeholder="Адрес..." />
			<button  type="button">Изменить</button>
		</form>
		</div>

		<div class="modal" id="billModal">
			<form action="">
				<label for="">ФИО</label>
				<input type="text" name="" id="" placeholder="ФИО..." />
				<label for="">Телефон</label>
				<input type="text" name="" id="" placeholder="Телефон..." />
				<label for="">Адрес</label>
				<input type="text" name="" id="" placeholder="Адрес..." />
				<label for="">Способ оплаты</label>
				<div style="display:flex; gap:10px;"> 			
					<button  type="button">Картой онлайн</button>
					<button  type="button">Наличные курьеру</button>
				<div>
			</form>
		</div>


`
