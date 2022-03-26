const openBtn = document.querySelector('.open-modal-btn')
const modal = document.querySelector('.modal')
const closeIcon = document.querySelector('i.fas.fa-times')
const closeBtn = document.querySelector('.modal__button-close')

const tgModal = () => modal.classList.toggle('hide')

openBtn.addEventListener('click', () => tgModal())
closeIcon.addEventListener('click', () => tgModal())
closeBtn.addEventListener('click', () => tgModal())
modal.addEventListener('click', e => e.target == e.currentTarget ? tgModal() : e.preventDefault())