const allModal = document.getElementsByClassName("modal")

for (let element of allModal) {
	element.addEventListener("click", () => hideModal(element))
	element.childNodes[1].addEventListener("click", (e) => e.stopPropagation())
}

export const showModal = (modalName) => {
	const modal = document.getElementById(modalName)
	if (modal) modal.style.display = "flex"
}

export const hideModal = (el) => {
	el.style.animation = "modalFadeOut 0.3s forwards ease"
	setTimeout(() => {
		el.style.display = "none"
		el.style.animation = "modalFadeIn 0.3s forwards ease"
	}, 500)
}
