/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/

function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
} 

const header = document.querySelector("#header")

header.addEventListener(`click`, function(){ toggleColor(header) } )


/***** Deliverable 2 *****/

const form = document.querySelector("#new-player-form")
  
  form.addEventListener('submit', function formSubmitEventHandler(event) {
    event.preventDefault()
    
    renderPlayer({  
      number: parseInt(form.querySelector("[name='number']").value),
      name: form.querySelector("[name='name']").value,
      nickname: form.querySelector("[name='nickname']").value,
      photo: form.querySelector("[name='photo']").value,
      likes: 1000
    })
    likeButtons = document.querySelectorAll('.like-button')
    thisLikeButton = likeButtons[likeButtons.length - 1]
    thisLikeButton.addEventListener('click', event => {
      const likes = thisLikeButton.parentNode.querySelector('.likes')
      const newLikeCount = parseInt(likes.innerHTML.split(" ")[0]) + 1
      likes.innerHTML = newLikeCount + " likes"
    })

  })

/***** Deliverable 3 *****/


document.addEventListener('DOMContentLoaded', function(){
  likeButtons = document.querySelectorAll('.like-button')
  likeButtons.forEach(button => {
    button.addEventListener('click', event => {
      const likes = button.parentNode.querySelector('.likes')
      const newLikeCount = parseInt(likes.innerHTML.split(" ")[0]) + 1
      likes.innerHTML = newLikeCount + " likes"
    })
  })
})