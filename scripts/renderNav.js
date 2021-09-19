import navData from './../data/nav.json'
let navContainer = document.getElementsByTagName('nav')[0]
if (navContainer) {
  const navArr = navData.data

  let nav = navArr.map((el) => {
    return `
    <a href="/screens/products.html" class='nav__link'
      onmouseover="document.getElementById('subCont').style.display = 'flex'"
    >
      ${el.title}
    </a>
  `
  })

  let sub = `<div class='nav--sub-container' id='subCont'       
    onmouseout="
    document.getElementById('subCont').style.display = 'none'
    this.childNodes.forEach(el => {
      el.addEventListener('mouseout', (e) => {e.preventDefault(); e.stopPropagation()});
    })
    "
  >
  <a href="/screens/products.html" >
        <div class='nav--sub-container__element' >
          <img src='/images/jannet-serhan-snHXvw1C690-unsplash 1.jpg' alt=''/> 
          <span>Коллекция "дождь"</span>
        </div>
  </a>
  <a  href="/screens/products.html" >
        <div class='nav--sub-container__element' >
          <img src='/images/kek.jpg' alt=''/> 
          <span>Кухонный инвентарь </span>
        </div>
  </a>
  </div>`

  navContainer.innerHTML = nav.join('\n') + sub
}
