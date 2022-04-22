const brush = document.querySelector('#brush'),
      eraser = document.querySelector('#eraser'),
      canvas = document.querySelector('canvas'),
      ctx = canvas.getContext('2d')

const setSize = size => document.querySelector('#size').innerText = ctx.lineWidth = size
const setColor = color => ctx.strokeStyle = ctx.fillStyle = color

const draw = (pos1, pos2) => {
	// draw circle
	ctx.beginPath()
	ctx.arc(pos1.x, pos1.y, size/2, 0, Math.PI * 2)
	ctx.fill()

	// draw line
	ctx.beginPath()
	ctx.moveTo(pos1.x, pos1.y)
	ctx.lineTo(pos2.x, pos2.y)
	ctx.stroke()

	pos1.x = pos2.x
	pos1.y = pos2.y
}

var isPressed = false,
    pos1 = {
		x: undefined,
		y: undefined
	},
	pos2 = {
		x: undefined,
		y: undefined
	},
	size = 2,
	color = '#000';

ctx.lineWidth = size = document.querySelector('#size').innerText
ctx.strokeStyle = ctx.fillStyle = color

canvas.addEventListener('mousedown', e => {
	isPressed = true

	pos1.x = e.offsetX
	pos1.y = e.offsetY
})

canvas.addEventListener('mouseup', () => isPressed = false)

canvas.addEventListener('mousemove', e => {
	if (isPressed) {
		pos2.x = e.offsetX
		pos2.y = e.offsetY

		draw(pos1, pos2)
	}
})

document.querySelector('#decrease').addEventListener('click', () => {
	size == 1
		? size = 1
		: size <= 5
			? --size
			: size -= 5
	setSize(size)
})

document.querySelector('#increase').addEventListener('click', () => {
	size == 20
		? size = 20
		: size < 5
			? ++size
			: size += 5
	setSize(size)
})

document.querySelector('#clear').addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))

document.querySelector('#color').addEventListener('change', e => {
	color = e.target.value
	setColor(color)
})

brush.addEventListener('click', () => {
	eraser.classList.remove('selected')
	brush.classList.add('selected')

	setColor(color)
})

eraser.addEventListener('click', () => {
	brush.classList.remove('selected')
	eraser.classList.add('selected')

	setColor('#fff')
})

document.querySelector('#save').addEventListener('click', e => e.currentTarget.href = canvas.toDataURL('image/png'))