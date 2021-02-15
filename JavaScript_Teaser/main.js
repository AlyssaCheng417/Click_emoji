const happy = document.querySelector('#happy')

function moveHappy(){
happy.style.top = Math.random() * innerHeight + 'px'
happy.style.left = Math.random() * innerWidth + 'px'
}

function waitAsec() {
  setTimeout(moveHappy, 2000)
}

function changeHappy () {
happy.setAttributes('src', 'funny.png')
}

function keyWasPressed(e) {
  alert(e.key)
}
happy.addEventListener('mouseover', waitAsec)
happy.addEventListener('click', changeHappy)

window.addEventListener('keypress', keyWasPressed)
