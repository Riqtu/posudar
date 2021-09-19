import { hideModal, showModal } from './modal'
import '/styles/cart.scss'

document.getElementById('billModalOpenBtn').addEventListener('click', () => {
  showModal('billModal')
})
document.getElementById('billModalCloseBtn').addEventListener('click', () => {
  hideModal(document.getElementById('billModal'))
})
