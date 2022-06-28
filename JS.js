window.onload = animation = () => {
    var header = document.querySelector('.header')
    var fcTitulo = document.querySelector('.frases_contenedor--titulo')
    var fcParrafo = document.querySelector('.frases_contenedor--parrafo')
    $(window).scroll(function () {
        var scroll_pos = $(this).scrollTop()
        scroll_pos > 100 ? header.classList.add('header_color') : header.classList.remove('header_color')
        scroll_pos > 1700 ? fcTitulo.classList.add('fc--active') : fcTitulo.classList.remove('fc--active')
        scroll_pos > 1750 ? fcParrafo.classList.add('fc--active') : fcParrafo.classList.remove('fc--active')
    })
}