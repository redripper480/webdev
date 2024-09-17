const section1 = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY) / 150

  if (window.scrollY === 0) {
    section1.style.backgroundColor = 'transparent' 
  } else {
    section1.style.backgroundColor = `rgb(13,13,13)`
  }
})