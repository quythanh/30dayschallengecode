fetch('./assets/data/projects.json')
    .then(res => res.json())
    .then(projects => document.querySelector('#projects')
    .innerHTML = projects.map((project, index) => `
        <div class="project">
            <div class="project__day">Day ${index + 1}</div>
            <img class="project__img" src="./assets/img/day${index + 1}.png" alt="${project}">
            <div class="project__content">
                <div class="project__title">
                    ${project}
                </div>
                <div class="project__redirect">
                    <a href="./day-${index + 1}-${project.replaceAll(' ', '-')}/" class="project__btn" target="_blank">Live Demo</a>
                    <a
                        href="https://github.com/quythanh/30dayschallengecode/tree/main/day-${index + 1}-${project.replaceAll(' ', '-')}"
                        class="project__btn"
                        target="_blank"
                    >Source Code</a>
                </div>
            </div>
        </div>
        `).join(""))