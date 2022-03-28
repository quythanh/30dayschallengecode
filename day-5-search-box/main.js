// simplest way
// document.querySelector('.search-box__btn').addEventListener('click', () => document.querySelector('.search-box').classList.toggle('open'))

// today lesson focus on 'this'
document.querySelector('.search-box__btn').addEventListener('click', function() {
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
})