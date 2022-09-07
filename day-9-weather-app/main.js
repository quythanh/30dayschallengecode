const input = document.querySelector('.search')
const apiKey = '982a3c53f94d5448a7d8c39e19711137'

const changeWeatherUI = weather => {
    document.querySelector('.content').classList.remove('hide')
    document.querySelector('.name .city').innerText = weather.name
    document.querySelector('.name .country').innerText = weather.sys.country
    document.querySelector('.time').innerHTML = new Date().toLocaleString()

    let temp = Math.round(weather.main.temp - 272.15)
	document.querySelector('.temperature .value').innerHTML = temp
    document.body.className = temp >= 18 ? 'hot' : 'cold'

    document.querySelector('.short-desc').innerHTML = weather.weather[0].main
    document.querySelector('.visibility span').innerText = weather.visibility + " (m)"
    document.querySelector('.wind span').innerText = weather.wind.speed + " (m/s)"
    document.querySelector('.cloud span').innerHTML = weather.clouds.all + " (%)"
}

const getWeather = city => {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    fetch(apiURL).then(res => res.json()).then(data =>
        data.cod == 200
            ? changeWeatherUI(data)
            : document.querySelector('.content').classList.add('hide')
    )
    input.value = ''
}

input.addEventListener('keydown', e =>
    e.key == 'Enter' && input.value
        ? getWeather(e.target.value.trim())
        : null
)

getWeather("ho chi minh")