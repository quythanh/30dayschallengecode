function toggleElement(e) {
    var elementRect = e.getClientRects()[0],
        screenHeight = window.innerHeight || document.documentElement.clientHeight;
    
    (elementRect.bottom < 0 || elementRect.top > screenHeight)
        ? e.classList.remove('start')
        : e.classList.add('start')
}

function checkAnimation() {
    document.querySelectorAll(".show-on-scroll").forEach(e => toggleElement(e))
}

window.onscroll = checkAnimation

checkAnimation()