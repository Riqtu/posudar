import navProductsData from './../data/navProducts.json'
let navProductContainer = document.getElementsByClassName('nav-product')[0]
if (navProductContainer) {
  const navProductsArr = navProductsData.data
  let navProducts = navProductsArr.map((el) => {
    return `
<a href='/screens/products.html'>
    <div class="nav-product__box">
    <span>${el.title}</span>
    <img src="${el.photo}" alt="" />
  </div>
</a>
`
  })
  navProductContainer.innerHTML = navProducts.join('\n')
}
