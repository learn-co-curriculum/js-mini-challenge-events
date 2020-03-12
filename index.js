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
  playerDiv.lastElementChild.addEventListener("click", (event) => {
            player.likes = player.likes + 1
            playerDiv.querySelector(".likes").textContent = `${player.likes} likes`
  })
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/


/***** Deliverable 1 *****/
headerColor = document.querySelector("h1#header")
headerColor.addEventListener("click", (event) => toggleColor(event.target))
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}


/***** Deliverable 2 *****/
const playerForm = document.getElementsByTagName('input')
const newPlayerForm = document.querySelector("form#new-player-form")
newPlayerForm.addEventListener("submit", handleformsubmit)
function handleformsubmit(event){
      event.preventDefault()
      const player = {
            number: playerForm[0].value,
            name: playerForm[1].value,
            nickname: playerForm[2].value,
            photo: playerForm[3].value,
            likes: 0
                    }
      renderPlayer(player)
      newPlayerForm.reset()
}
/***** Deliverable 3 *****/

/****   Line 24  --  Line 27    ****/
