const redColor = document.querySelector('.red')
const grayColor = document.querySelector('.gray')
const blackColor = document. querySelector('#black')
const imageCard = document.querySelector('.imageContainer')
const cartButton = document.getElementById('button')
const feedbackButton = document.querySelector('#feedback')

// Modificado elementos
// agregado el evento addEventListener

// Cambiado a color rojo
redColor.addEventListener('click', function (){
  cartButton.style.backgroundColor = 'red';
  imageCard.style.backgroundImage = 'url(./assets/mercedez_red.jpg)'
})


// Cambiado a color gray
grayColor.addEventListener('click', () => {
  cartButton.style.backgroundColor = 'gray'
  imageCard.style.backgroundImage = 'url(./assets/mercedez_gray.jpg)'
})

// Cambiado a color black
blackColor.addEventListener('click', function(){
  cartButton.style.backgroundColor = 'black'
  imageCard.style.backgroundImage = 'url(./assets/mercedez_black.webp)'
})

// Creando etiqueta h3, agregarle una clase, un texto y lo voy a incrustar en el html

// appendChild()
// const accesoDivDescripcion = document.querySelector('.descripcion')
// const etiquetah3 = document.createElement('h3');
// etiquetah3.className = 'tag';
// etiquetah3.textContent = 'Car'

// imageCard.appendChild(etiquetah3)


// insertBefore()

const etiquetah3 = document.createElement('h3');
etiquetah3.className = 'tag';
etiquetah3.textContent = 'Car'

const containerDescription = document.querySelector('.descripcion')
const cardh2 = document.querySelector('h2')

containerDescription.insertBefore(etiquetah3, cardh2)

cartButton.addEventListener('click', function () {
  cartButton.style.display = 'none';
  feedbackButton.style.display = 'block'
  confetti({
      particleCount: 100,
      spread: 70,
      origin: {y: 1}
    })

})

feedbackButton.addEventListener('click', () => {
  cartButton.style.display = 'block';
  feedbackButton.style.display = 'none';
})
































