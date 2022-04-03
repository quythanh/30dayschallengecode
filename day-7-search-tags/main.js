var list_tags = ["ReactJS", "VueJS", "NodeJS"]
const input = document.querySelector('.content input')

const renderTags = () => {
    document.querySelector('.list-tags').innerHTML = list_tags.map((tag, index) => (`
        <li class="tag">
            ${tag}
            <i class="fal fa-times" onclick="removeTag(${index})"></i>
        </li>
    `)).join("")

    input.focus()
}

const addTag = tag => {
    if (list_tags.find(e => e === tag)) {}
    else {
        list_tags.push(tag)
        renderTags()
    }

    input.value = ''
}

const removeTag = index => {
    list_tags.splice(index, 1)
    renderTags()
}

document.querySelector('.btn-remove').addEventListener('click', () => {
    list_tags = []
    renderTags()
})

input.addEventListener('keydown', e => (e.key == 'Enter' && input.value) ? addTag(input.value) : null)

renderTags()