import cardPhoto from '/images/image 12.png'
import cardSale from '/images/icons/sale.svg'
import cardCart from '/images/icons/cart.svg'

let productContainer = document.getElementsByClassName('product')[0]

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
      <div class="product__card--price"><span>1300</span> 560₽</div>
      <div class="product__card--title">Тарелка "Japan"</div>
  </a>
  <button class="product__card--cart-btn">
    <span>В корзину</span><img src="${cardCart}" alt="" />
  </button>
  </div>
`
})
productContainer.innerHTML = products.join('\n')
