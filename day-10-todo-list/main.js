var todolist = JSON.parse(localStorage.getItem('tasks')) || []

const ul = document.querySelector('.todos'),
    input = document.querySelector('.form__input'),
    form = document.querySelector('.form')

const updateStorage = tasks => tasks ? localStorage.setItem('tasks', JSON.stringify(tasks)) : localStorage.removeItem('tasks')

const isExist = value => value ? todolist.map(task => task.content).indexOf(value) + 1 : 1

const renderTasks = tasks => {
    updateStorage()
    ul.innerHTML = ''
    
    tasks.map(task => {
        const li = document.createElement('li')
        li.setAttribute('class', `task${task.isComplete ? ' completed' : ''}`)
        li.innerHTML = `
            <div class="task__content">${task.content}</div>
            <i class="fad fa-trash""></i>`
        
        li.addEventListener('click', function(e) {
            let index = isExist(this.querySelector('.task__content').innerText) - 1
            if (e.target == e.currentTarget) {
                todolist[index].isComplete = !todolist[index].isComplete
                updateStorage()
                this.classList.toggle('completed')
            }
        })

        li.querySelector('i').addEventListener('click', function() {
            todolist.splice(isExist(this.previousElementSibling.innerText) - 1, 1)
            updateStorage()
            this.parentElement.remove()
        })

        ul.appendChild(li)
    })
}

input.addEventListener('keydown', e => {
    let value = input.value.trim()
    
    if (e.key == "Enter" && !isExist(value)) {
        todolist.push({
            'content': value,
            'isComplete': false
        })
        input.value = ''
        renderTasks(todolist)
    }

})

form.addEventListener('submit', e => {
    e.preventDefault()

    let value = input.value.trim()

    if (!isExist(value)) {
        todolist.push({
            'content': value,
            'isComplete': false
        })
        renderTasks(todolist)
    }
    
    input.value = ''
})

renderTasks(todolist)