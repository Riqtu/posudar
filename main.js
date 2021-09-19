import './styles/style.scss'
import './styles/header.scss'
import './styles/navbar.scss'
import './styles/news-slider.scss'
import './styles/nav-product.scss'
import './styles/advert.scss'
import './styles/product.scss'
import './styles/footer.scss'

import './styles/filter.scss'
import './styles/product-description.scss'
import './styles/userAccount.scss'

import './styles/cart.scss'
import './styles/modal.scss'

import './scripts/renderFooter'
import './scripts/renderModals'

import './scripts/renderHeader'
import './scripts/renderNav'
// import "./scripts/renderProducts"

import { hideModal, showModal } from './scripts/modal'

document.getElementById('authLink').addEventListener('click', () => {
  showModal('auth')
})

document.getElementById('authLinkModal').addEventListener('click', () => {
  hideModal(document.getElementById('reg'))
  showModal('auth')
})

document.getElementById('regLink').addEventListener('click', () => {
  hideModal(document.getElementById('auth'))
  showModal('reg')
})

document.getElementById('regSuccessBtn').addEventListener('click', () => {
  hideModal(document.getElementById('reg'))
  showModal('regSuccess')
})
document.getElementById('regSuccessCloseBtn').addEventListener('click', () => {
  hideModal(document.getElementById('regSuccess'))
})

document.addEventListener('scroll', () => {
  const header = document.getElementsByTagName('header')[0]
  if (window.scrollY > 0) {
    header.style.background = 'white'
    header.style.borderBottom = '1px solid rgb(122, 33, 33)'
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.336)'
    header.style.borderBottom = 'none'
  }
})

let cartCounter = 0

window.addEventListener('load', () => {
  const cartButtons = document.querySelectorAll('.product__card--cart-btn')

  cartButtons.forEach((element) => {
    element.addEventListener('click', (e) => {
      let button = e.target.closest('button') // (1)

      if (!button) return // (2)

      if (!element.contains(button)) return // (

      button.style.background = 'gray'
      button.textContent = 'Добавлено'
      //   cartCounter =
      //     cartCounter +
      //     Number(
      //       button.previousElementSibling.getElementsByTagName('input')[0].value
      //     )
      cartCounter += 1
      if (cartCounter !== 0) {
        const cartCounterEl = document.getElementById('cart-counter')
        cartCounterEl.style.display = 'inline'
        cartCounterEl.innerHTML = `<span>${cartCounter}</span>`
      }
    })
  })
})

export { cartCounter }
// document.getElementById("billModalOpenBtn").addEventListener("click", () => {
// 	showModal("billModal")
// })
// document.getElementById("billModalCloseBtn").addEventListener("click", () => {
// 	hideModal(document.getElementById("billModal"))
// })

// document.getElementById("updInfoModalOpenBtn").addEventListener("click", () => {
// 	showModal("updInfoModal")
// })
// import "./scripts/renderNavProducts"
