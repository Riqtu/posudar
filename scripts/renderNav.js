import navData from './../data/nav.json'
let navContainer = document.getElementsByTagName('nav')[0]
if (navContainer) {
  const navArr = navData.data

  let nav = navArr.map((el) => {
    return `
    <a href="/screens/products.html">${el.title}</a>
  `
  })
  navContainer.innerHTML = nav.join('\n')
}
