const time = 1200, // milisecond
      delay = 10

const countUp = e => {
    var visit = e.querySelector('.counter__visited'),
        to = parseInt(visit.innerText),
        step = Math.floor(to*delay/time),
        count = 0
    
    let counting = setInterval(() => {
        if (count > to) {
            count = to
            clearInterval(counting)
        } else
            count += step

        visit.innerText = count
    }, delay)
}

document.querySelectorAll('.counter').forEach(e => countUp(e))