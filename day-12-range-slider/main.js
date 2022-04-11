var slider = document.querySelector('.slider')

slider.addEventListener(
    'mousemove',
    e => {
        let pWidth = (e.pageX - slider.offsetLeft) / slider.offsetWidth
        
        document.querySelector('.slider__range-bar').style.width
            = document.querySelector('.slider__percent').innerText
            = Math.round(pWidth * 100) + "%"
        document.body.style = `background: rgba(0, 0, 0, ${pWidth});`
        document.querySelector('h1').style = `color: rgb(${Math.round(pWidth*255)}, ${Math.round(pWidth*255)}, ${Math.round(pWidth*255)})`
    }
)