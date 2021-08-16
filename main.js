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

// import "./scripts/renderNavProducts"
