class Carrusel {
  constructor (padre, cards) {
    this.carrusel = document.createElement('div')
    this.carrusel.classList.add('flex')

    this.contenedorInterno = document.createElement('div')
    this.contenedorInterno.classList.add('carruselContenedorInterno')

    this.btnMenos = document.createElement('button')
    this.btnMenos.innerHTML = '<'
    this.btnMenos.onclick = () => this.click(-1)
    this.btnMenos.classList.add('carruselBtn')

    this.slide = document.createElement('div')
    this.slide.classList.add('flex')
    this.slide.classList.add('carruselSlide')

    for (const card of cards) {
      this.slide.appendChild(card)
    }

    this.btnMas = document.createElement('button')
    this.btnMas.innerHTML = '>'
    this.btnMas.onclick = () => this.click(1)
    this.btnMas.classList.add('carruselBtn')
    this.btnMas.classList.add('carruselBtnMas')

    this.carrusel.appendChild(this.btnMenos)
    this.contenedorInterno.appendChild(this.slide)
    this.carrusel.appendChild(this.contenedorInterno)
    this.carrusel.appendChild(this.btnMas)
    padre.innerHTML = ''
    padre.appendChild(this.carrusel)
    const anchoCards = parseInt(cards[0].style.width) * cards.length
    if (anchoCards <= this.slide.scrollWidth) this.ocultarBotones()
  }

  posicion = 0
  click (sentido) {
    const ancho=parseInt(window.getComputedStyle(this.slide.children[0]).width);
    this.posicion += ancho * sentido
    if (this.slide.clientWidth +this.posicion>this.slide.scrollWidth+ancho ||this.posicion<0)this.posicion=0;
    this.slide.scrollLeft=this.posicion;
    this.centrar()// centrado vertical
  }

  ocultarBotones () {
    this.btnMenos.classList.add('carruselInvisible')
    this.btnMas.classList.add('carruselInvisible')
  }

  //centrado vertical
  centrar () {
    const buttonRect = this.btnMenos.getBoundingClientRect()
    const scrollTop = window.scrollY || window.pageYOffset
    const buttonTop = buttonRect.top + scrollTop
    const windowHeight = window.innerHeight
    const targetScroll = buttonTop - windowHeight / 2 + buttonRect.height / 2
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    })
  }
}
