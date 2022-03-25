const projects = [
    {
        "day": 1,
        "title": "Product Card",
        "src": "day-1-product-card"
    },
    {
        "day": 2,
        "title": "Profile Card",
        "src": "day-2-profile-card"
    }
]

// render
document.querySelector('#projects').innerHTML = projects.map(project => `
<div class="project">
    <div class="project__day">Day ${project.day}</div>
    <img class="project__img" src="./assets/img/day${project.day}.png" alt="${project.title}">
    <div class="project__content">
        <div class="project__title">
            ${project.title}
        </div>
        <div class="project__redirect">
            <a href="./${project.src}/" class="project__btn" target="_blank">Live Demo</a>
            <a
                href="https://github.com/quythanh/30dayschallengecode/tree/main/${project.src}"
                class="project__btn"
                target="_blank"
            >Source Code</a>
        </div>
    </div>
</div>
`).join("")