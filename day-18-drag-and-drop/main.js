const boxes = document.querySelectorAll('.box'),
      targets = document.querySelectorAll('.target')

var curTarget = "p0",
    curOrder = JSON.parse(localStorage.getItem('day18-curDrop')) || [
        {
            "id": "p0",
            "pos": 0
        },
        {
            "id": "p1",
            "pos": 1
        }
    ]

curOrder.map(order => boxes[order["pos"]].appendChild(document.querySelector(`.target#${order["id"]}`)))

targets.forEach(target => {
    target.addEventListener('dragstart', () => {
        target.classList.add('dragging')
        curTarget = target.id
    })
    
    target.addEventListener('dragend', () => target.classList.remove('dragging'))
})
      
boxes.forEach((box, index) => box.addEventListener('dragover', e => {
    e.preventDefault()
    
    if (!box.querySelector('.target')) {
        box.appendChild(document.querySelector(`.target#${curTarget}`))

        curOrder[curTarget[1]]["pos"] = index
        localStorage.setItem('day18-curDrop', JSON.stringify(curOrder))
    }
}))