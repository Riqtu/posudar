// alert('kek')
import logo from "./../images/posudar.png"

let footerContainer = document.getElementsByTagName("footer")[0]
console.log(footerContainer)
footerContainer.innerHTML = `

<div>
<img src="${logo}" alt="" class="logo" />
<div style="margin-left: 20px">ООО "ПосударЪ" <br />2020-2021</div>
</div>
<div>
<div class="contact-info">
  +7 800 250-80-24 <br />
  пн-вск с 8:00 - 17:00
</div>
<div class="navigation">
  <a href="">inst</a>
  <a href="">vk</a>
  <a href="">twitter</a>
</div>
</div>

`
