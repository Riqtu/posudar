import navProductsData from './../data/navProducts.json'
let navProductContainer = document.getElementsByClassName('nav-product')[0]

const navProductsArr = navProductsData.data

let navProducts = navProductsArr.map((el) => {
  return `
  <div class="nav-product__box">
  <span>${el.title}</span>
  <img src="${el.photo}" alt="" />
</div>
`
})
navProductContainer.innerHTML = navProducts.join('\n')
