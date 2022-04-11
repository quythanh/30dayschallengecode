const toast = {
    "error": "fa-exclamation-triangle",
    "warning": "fa-exclamation-circle",
    "success": "fa-check-circle"
}

const createToast = type => {
    const newToast = document.createElement('div')
    newToast.setAttribute('class', `toast toast--${type}`)
    newToast.innerHTML = `
        <div class="toast__icon">
            <i class="fad ${toast[type]}"></i>
        </div>
        <div class="toast__message">
            This is a${type === 'error' ? 'n ' + type : ' ' + type} message !
        </div>
        <div class="toast__countdown"></div>`
    
    document.querySelector('#toasts').appendChild(newToast)

    setTimeout(() => newToast.style.animation = 'hide_slide 1s ease forwards', 4000)
    setTimeout(() => newToast.remove(), 5001)
}

document.querySelectorAll(".control div").forEach(btn => btn.addEventListener('click', e => createToast(e.target.className.split("--")[1])))