const username = document.querySelector('#username'),
    email = document.querySelector('#email'),
    password = document.querySelector('#password'),
    password2 = document.querySelector('#confirmPassword'),
    form = document.querySelector('.container__form')

const showError = (input, message) => {
    let parent = input.parentElement
    parent.classList.add('error')
    parent.querySelector('.form__error').innerText = message
}

const showValid = input => {
    let parent = input.parentElement
    parent.classList.remove('error')
    parent.querySelector('.form__error').innerText = ''
}

const getFieldName = input => input.id.charAt(0).toUpperCase() + input.id.slice(1)

const checkRequired = listInput => {
    var isEmpty = false
    listInput.map(input => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
            isEmpty = true
        } else
            showValid(input)
    })
    return isEmpty
}

const checkLength = (input, min, max) =>
	(input.value.length < min) ?
		showError(input, `${getFieldName(input)} must be at least ${min} characters`) :
	(input.value.length > max) ?
		showError(input, `${getFieldName(input)} must be less than ${max} characters`) : showValid(input)

const checkEmail = emailInput => {
    emailInput.value = emailInput.value.trim()
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    regEmail.test(emailInput.value) ? showValid(emailInput) : showError(emailInput, 'Email is not valid')
}

const checkPasswordsMatch = (pass1, pass2) => (pass1.value.trim() !== pass2.value.trim()) ? showError(pass2, 'Password do not match!') : showValid(pass2)

form.addEventListener('submit', e => {
    e.preventDefault()

    if (!checkRequired([username, email, password, password2])) {
        checkLength(username, 3, 15)
		checkLength(password, 6, 25)
		checkEmail(email)
		checkPasswordsMatch(password, password2)
    }
})