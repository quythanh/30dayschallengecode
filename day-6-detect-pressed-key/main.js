var whichBox = document.querySelector('.box__result'),
    eKey = document.querySelector('.card#key .card__value'),
    eLocation = document.querySelector('.card#location .card__value'),
    eWhich = document.querySelector('.card#which .card__value'),
    eCode = document.querySelector('.card#code .card__value'),
    alertBox = document.querySelector('.alert'),
    box = document.querySelector('.box')


document.addEventListener('keydown', e => {
    alertBox.classList.contains('hide') ? null : alertBox.classList.add('hide')
    box.classList.remove('hide')

    whichBox.innerText = e.which
    eKey.innerText = e.which === 32 ? 'Space' : e.key
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code

    console.log(e)
})