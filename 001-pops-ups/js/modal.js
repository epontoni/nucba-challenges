const $modal = document.querySelector('.modal')
const $contentModal = document.querySelector('#content-modal')
const $closeModalButton = $modal.querySelector('#close-modal')

$modal.addEventListener('click', event => event.stopPropagation())
$closeModalButton.addEventListener('click', closeModal)

const $modal1Content = `
<img src="./images/saly-27.png" alt="Saly" />
<p>Utilizamos cookies para mejorar la experiencia del usuario, la analítica y el marketing.</p>
<button class="btn">¡Eso está bien!</button>
`

const $modal2Content = `
<img src="./images/frame.png" alt="Frame" />
<p>¡Se cerrará la sesión inmediatamente!</p>
<button class="btn2">Ampliar sesión</button>
`

const $showModal1 = document.querySelector('.showModal1')
const $showModal2 = document.querySelector('.showModal2')

$showModal1.addEventListener('click', function(){
    $modal.close()
    $contentModal.innerHTML = $modal1Content
    $modal.showModal()
})

$showModal2.addEventListener('click', function(){
    $modal.close()
    $contentModal.innerHTML = $modal2Content
    $modal.showModal()
})

function closeModal(event) {
  event.stopPropagation()
  $modal.close()
}
