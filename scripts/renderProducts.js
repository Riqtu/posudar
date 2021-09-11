import cardPhoto from '/images/image 12.png'
import cardSale from '/images/icons/sale.svg'
import cardCart from '/images/icons/cart.svg'

let productContainer = document.getElementsByClassName('product')[0]
if (productContainer) {
  const productsArr = ['', 'sale', '', '', 'sale', '', '', '', 'sale', '']

  let products = productsArr.map((el) => {
    return `
      <div class="product__card">
      <a href="/screens/product.html">
        <div class="product__card--face">
          ${
            el === 'sale'
              ? ` <img src="${cardSale}" alt="" class="product__card--sale-icon" />`
              : ''
          }
          <img
            src="${cardPhoto}"
            alt=""
            class="product__card--image"
          />
          ${
            el === 'sale'
              ? ` <span class="product__card--sale-text">50%</span>`
              : ''
          }
        </div>
        <div>
          <span class="product__card--bill-style">Розничная цена</span>
          ${
            el === 'sale'
              ? `<div class="product__card--price"><span>1300</span> 560₽</div>`
              : `<div class="product__card--price">560₽</div>`
          }
        </div>
        <div>
          <span class="product__card--bill-style">Оптовая цена (от 30шт.)</span>
          ${
            el === 'sale'
              ? `<div class="product__card--price opt"><span>1000</span> 360₽</div>`
              : `<div class="product__card--price opt">360₽</div>`
          }
        </div>
        <div class="product__card--title">Тарелка "Japan"</div>
      </a>
      <div class="counter" style="margin-bottom: 10px">
      <button onclick="this.nextElementSibling.stepDown()">-</button
      ><input type="number" min="0" value="1" /><button
        onclick="this.previousElementSibling.stepUp()"
      >
        +
      </button>
    </div> 
    <button class="product__card--cart-btn" onclick="this.style.background = 'gray'; this.textContent = 'Добавлено'">
      <span>В корзину</span><img src="${cardCart}" alt="" />
    </button> 
  </div>
`
  })
  productContainer.innerHTML = products.join('\n')
}
