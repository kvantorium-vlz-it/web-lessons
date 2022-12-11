const root = document.getRootNode()
const modal = document.querySelector('#modal')
const button = document.querySelector('#close-modal')
const openModalButton = document.querySelector('#open-modal')

const closeModal = () => modal.classList.add('modal--close')
const openModal = () => modal.classList.remove('modal--close')

button.addEventListener('click', closeModal)
openModalButton.addEventListener('click', openModal)

root.addEventListener('click', (e) => {
    const isOpenModalButton = e.target === openModalButton
    const isInsideModal = modal.contains(e.target)

    if (!isOpenModalButton && !isInsideModal) {
        closeModal()
    }
})

// canvas

const canvas = document.querySelector('#canvas')

const context = canvas.getContext('2d')

context.beginPath()
context.moveTo(150, 75)
context.lineTo(170, 75)
context.closePath()

context.stroke()

context.strokeStyle = '#4287f5'

context.strokeRect(20, 50, 70, 20)

context.beginPath()
context.arc(200, 50, 30, 0, Math.PI * 2)
context.closePath()

context.stroke()

context.clearRect(0, 0, 300, 150)

context.beginPath()
context.moveTo(150, 2)
context.lineTo(120, 148)
context.lineTo(220, 50)
context.lineTo(80, 50)
context.lineTo(180, 148)
context.closePath()
context.stroke()

const image = new Image()
image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'

image.onload = (e) => {
    context.drawImage(image, 0, 0)
}

const coordinates = {
    x: 0,
    y: 0,
}

canvas.addEventListener('mousemove', (e) => {
    context.beginPath()
    context.moveTo(coordinates.x, coordinates.y)
    context.lineTo(e.x, e.y)
    coordinates.x = e.x
    coordinates.y = e.y
    context.closePath()
    context.stroke()
})