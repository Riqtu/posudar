let headerContainer = document.getElementsByTagName('header')[0]
import logo from './../images/logo.png'
import search from './../images/icons/search.svg'
if (headerContainer)
  headerContainer.innerHTML = `

<div>
<div class="logo">
  <a href="/index.html"><img src="${logo}" alt="Логотип" /></a>
</div>
<div class="search">
  <button><img src="${search}" alt="" /></button>
  <input type="text" placeholder="Поиск..." />
</div>
</div>
<div>
<div class="contact-info">
  +7 800 250-80-24 <br />
  пн-вск с 8:00 - 17:00
</div>
<div class="navigation">
  <a href="/screens/userAccount-orders.html">Кабинет</a>
  <a href="/screens/cart.html">Корзина <span id="cart-counter"></span></a>
  <a href="#" id="authLink">Вход</a>
</div>
</div>

`
