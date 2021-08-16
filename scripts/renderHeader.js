let headerContainer = document.getElementsByTagName('header')[0]

headerContainer.innerHTML = `

<div>
<div class="logo">
  <a href="/index.html"><img src="/images/logo.png" alt="Логотип" /></a>
</div>
<div class="search">
  <button><img src="/images/icons/search.svg" alt="" /></button>
  <input type="text" placeholder="Поиск..." />
</div>
</div>
<div>
<div class="contact-info">
  +7 800 250-80-24 <br />
  пн-вск с 8:00 - 17:00
</div>
<div class="navigation">

  <a href="/screens/cart.html">Корзина</a>
  <a href="#" id="authLink">Вход</a>
</div>
</div>

`
