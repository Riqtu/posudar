import "./styles/style.scss"
import "./styles/header.scss"
import "./styles/navbar.scss"
import "./styles/news-slider.scss"
import "./styles/nav-product.scss"
import "./styles/advert.scss"
import "./styles/product.scss"
import "./styles/footer.scss"

import "./styles/filter.scss"
import "./styles/product-description.scss"
import "./styles/userAccount.scss"

import "./styles/cart.scss"
import "./styles/modal.scss"

import "./scripts/renderFooter"
import "./scripts/renderModals"

import "./scripts/renderHeader"
import "./scripts/renderNav"
// import "./scripts/renderProducts"

import { hideModal, showModal } from "./scripts/modal"

document.getElementById("authLink").addEventListener("click", () => {
	showModal("auth")
})

document.getElementById("authLinkModal").addEventListener("click", () => {
	hideModal(document.getElementById("reg"))
	showModal("auth")
})

document.getElementById("regLink").addEventListener("click", () => {
	hideModal(document.getElementById("auth"))
	showModal("reg")
})

document.getElementById("regSuccessBtn").addEventListener("click", () => {
	hideModal(document.getElementById("reg"))
	showModal("regSuccess")
})
document.getElementById("regSuccessCloseBtn").addEventListener("click", () => {
	hideModal(document.getElementById("regSuccess"))
})

document.addEventListener("scroll", () => {
	const header = document.getElementsByTagName("header")[0]
	if (window.scrollY > 0) {
		header.style.background = "white"
		header.style.borderBottom = "1px solid rgb(122, 33, 33)"
	} else {
		header.style.background = "rgba(255, 255, 255, 0.336)"
		header.style.borderBottom = "none"
	}
})

let cartCounter = 0
let billCounter = 0

const handleCartCounter = (classElement) => {
	const cartButtons = document.querySelectorAll(classElement)
	cartButtons &&
		cartButtons.forEach((element) => {
			element.addEventListener("click", (e) => {
				let button = e.target.closest("button") // (1)

				if (!button) return // (2)

				if (!element.contains(button)) return // (

				let price = button.parentNode
					.getElementsByTagName("a")[0]
					.getElementsByTagName("div")[1]
					.getElementsByClassName("product__card--price")[0]
					.getElementsByTagName("h3")[0].textContent

				let priceNumb = Number(price.substring(0, price.length - 1))
				let counter = Number(
					button.parentNode
						.getElementsByClassName("counter")[0]
						.getElementsByTagName("input")[0].value
				)

				billCounter += priceNumb * counter
				cartCounter += counter

				button.style.background = "gray"
				button.textContent = "Добавлено"
				if (cartCounter !== 0) {
					const cartCounterEl = document.getElementById("cart-counter")
					cartCounterEl.style.display = "inline"
					cartCounterEl.innerHTML = `<span>${cartCounter} ед. ${billCounter} ₽</span>`
				}
			})
		})
}

window.addEventListener("load", () => {
	handleCartCounter(".product__card--cart-btn")
})

export { cartCounter }
