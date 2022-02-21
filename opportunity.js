let title = document.querySelector('#title')
button = document.querySelector('#disagree')
aggreebutton = document.querySelector('#agree')
hover = 0;
div = document.querySelector('.bad')
const icon = document.querySelector('#music_icon')
console.log(icon)
button.onmouseover = function() {
  setTimeout(function() {
    const ran1 = Math.random() * (window.innerWidth) + 20
    ran2 = Math.random() * (window.innerHeight)
    if (hover % 4 == 0) {
      div.classList.add('good')
      div.classList.remove("bad")
      div.textContent = 'Why not giving a chance?'
    } else if (hover % 2 == 0) {
      div.classList.add('good')
      div.classList.remove("bad")
      div.textContent = 'Oh, please give me the chance'
    } else if (hover > 10) {
      div.textContent = 'Well, well, if you really want to, go ahead'
      div.style.color = 'blue'
      button.removeAttribute('id');
      button.style.cssText = 'position: absolute;top: calc(60vh);left: calc(55vw);'
      return;
    } else {
      div.classList.add('bad')
      div.classList.remove("good")
      div.textContent = 'Look, even the button want you give me a chance'
    }
    button.style.position = 'absolute'
    button.style.left = ran1 + 'px'
    button.style.top = ran2 + 'px'
    console.log(hover)
    hover += 1

  }, 7.5)
}
async function agree() {
  await playAudio()
  await makeheart();

  //reassign the value 

  div = document.querySelector('#subtitle')
  div.classList.add('bad')
  div.classList.remove("good")
  document.querySelector('#title').innerHTML = "<b><i>It is so kind of you</i></b>"
  div.textContent = 'Look at the christmas tree, made for you!'
  document.querySelectorAll('button').forEach(i => i.remove())
  const tree = document.createElement('div')
  tree.id = 'tree'
  document.body.appendChild(tree)

  for (i = 1; i <= 20; i++) {
    for (j = i; j < 20; j++)
      tree.innerHTML += " ";
    for (j = 1; j <= (2 * i - 1); j++)
      tree.innerHTML += "*"
    tree.innerHTML += "<br>";
  }
}
document.querySelector('#disagree').addEventListener('click', function() {
  document.querySelector('#title').textContent = "Sorry, we can't make this together"
  document.querySelector('#subtitle').textContent = 'Have a nice day'
  setTimeout(() => window.close(), 3000)
})


function playAudio() {
  document.body.innerHTML += `<iframe style='display:none' type="text/html" src="https://www.youtube.com/embed/JGQ9YaI6kpk?autoplay=1" frameborder="0" allow="autoplay"></iframe>`
  document.querySelector('img').style.visibility = 'visible'

}

function makeheart() {
  const heart = document.createElement('div');
  heart.className = 'heart'

  document.body.appendChild(heart)
  setTimeout(() => {
    heart.classList.add('disappear')
    setTimeout(() => heart.remove(), 2000)
  }, 6000)
}
