const images = document.querySelectorAll('.wrapper__image img')
const gallery = document.querySelector('.gallery')
const closeBtn = document.querySelector('.fas.fa-times')
const prevBtn = document.querySelector('.fas.fa-chevron-left')
const nextBtn = document.querySelector('.fas.fa-chevron-right')

var curImg = document.querySelector('.gallery__inner img')
var curIndex = 0;

const tgGallery = () => gallery.classList.toggle('show')
const setImg = index => {
    if (index == 0) {
        prevBtn.classList.add('hide')
        nextBtn.classList.remove('hide')
    }
    else if (index == images.length - 1) {
        prevBtn.classList.remove('hide')
        nextBtn.classList.add('hide')
    }
    else {
        prevBtn.classList.remove('hide')
        nextBtn.classList.remove('hide')
    }
    curImg.src = images[index].src
}

closeBtn.addEventListener('click', () => tgGallery())
prevBtn.addEventListener('click', () => setImg(--curIndex))
nextBtn.addEventListener('click', () => setImg(++curIndex))

images.forEach((img, index) => img.addEventListener('click', () => {
    curIndex = index
    setImg(curIndex)
    tgGallery()
}))