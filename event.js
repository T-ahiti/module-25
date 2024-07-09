
const blueButton = document.getElementById('blue')
blueButton.onclick = blue
function blue(){
    document.body.style.backgroundColor = 'blue'
}

function makeRed(){
    document.body.style.backgroundColor = 'red'
}

const pinkButton = document.getElementById('pink')
pinkButton.addEventListener('click', makePink)

function makePink(){
    document.body.style.backgroundColor = 'pink'
}
