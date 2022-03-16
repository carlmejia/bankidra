const button = document.querySelector('#reactions-btn')
const overlay = document.querySelector('.overlay')

function areReactionsVisible(reactionsList) {
  return reactionsList = reactionsList.classList.contains('open')
}

button.addEventListener('click', function () {
  const reactionsList = this.children[1]
  reactionsList.classList.toggle('open')
  overlay.classList.toggle('visible')
})