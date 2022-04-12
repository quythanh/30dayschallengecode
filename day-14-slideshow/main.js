const main_img = document.querySelector('.main__img'),
    list_img = document.querySelectorAll('.list_img div')

var currentImg = 0

const setActiveImg = index => {
    main_img.src = list_img[index].querySelector('img').src
    list_img.forEach(img => img.classList.remove('active'))
    list_img[index].classList.add('active')
}

list_img.forEach((img, index) => img.addEventListener('click', () => {
    currentImg = index
    setActiveImg(currentImg)
}))

document.querySelector('.prev').addEventListener('click', () => {
    if (currentImg == 0)
        currentImg = list_img.length
    setActiveImg(--currentImg)
})

document.querySelector('.next').addEventListener('click', () => {
    if (currentImg == list_img.length - 1)
        currentImg = -1
    setActiveImg(++currentImg)
})