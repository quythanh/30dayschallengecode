const { useState, useEffect } = React

const Header = () => (
    <h1 id="page-heading">
        30 DAYS CODE CHALLENGE
    </h1>
)

const Project = ({projectName, index}) => (
    <div className="project">
        <div className="project__day">Day {index + 1}</div>
        <img className="project__img" src={`./assets/img/day${index + 1}.png`} alt={projectName} />
        <div className="project__content">
            <div className="project__title">
                {projectName}
            </div>
            <div className="project__redirect">
                <a href={`./day-${index + 1}-${projectName.replaceAll(' ', '-')}/`} className="project__btn" target="_blank">Live Demo</a>
                <a
                    href={`https://github.com/quythanh/30dayschallengecode/tree/main/day-${index + 1}-${projectName.replaceAll(' ', '-')}`}
                    className="project__btn"
                    target="_blank"
                >Source Code</a>
            </div>
        </div>
    </div>
)

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('./assets/data/projects.json')
                .then(res => res.json())
                .then(data => setProjects(data))
    }, [])

    return (
        <div id="projects">
            {projects.map((project, index) => <Project key={index} projectName={project} index={index} />)}
        </div>
    )
}

const App = () => (
    <React.Fragment>
        <Header />
        <Projects />
    </React.Fragment>
)

ReactDOM.render(<App />, document.getElementById('root'))