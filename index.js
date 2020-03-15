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
    // Nested Event Listeners Strategy
    // access like button for each player created; note we are using "playerDiv" and not "document" for querySelector because we want this for each player
  const likeButton = playerDiv.querySelector(".like-button")
  // create the listener for when the like button is clicked; attach the event for when it is clicked
  likeButton.addEventListener("click", event => {
    // access the players like count
    const likeCount = playerDiv.querySelector(".likes")
    // update player like count
    player.likes = player.likes + 1
    // display player like amount
    likeCount.textContent = `${player.likes} likes`
  })

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

// get the header that you want to change
const header = document.querySelector("#header")

// create a listener for when the header is clicked and attach a callback fn that toggles the color
header.addEventListener("click", event => {
  toggleColor(header)
})

/***** Deliverable 2 *****/

// get the form
const playerForm = document.querySelector("#new-player-form")

// create the listener for the form and attach a callback fn that reacts to the listener
playerForm.addEventListener("submit", handleFormSubmit)

// take in and execute 
function handleFormSubmit(event) {
  // always prevent default action for submit events
  event.preventDefault()
  // get form input
  const form = event.target
  // add form inputs to new player
  const newPlayer = {
    // number is the attribute; event is the form that was submitted; target is which value you are accessing on the form; value gets the value that was entered
    number: form["number"].value,
    name: form["name"].value,
    nickname: form["nickname"].value,
    photo: form["photo"].value,
    likes: 0
  }

  // create player with newPlayer
  renderPlayer(newPlayer)
  // reset form
  form.reset()
}

/***** Deliverable 3 *****/

// Event Delegation; Nested Event Listener Strategy is on line 21 to 33
// Use the tag that contains all Players; create a listener
playerContainer.addEventListener("click", event => {
  
  // Write a conditional that matches if the element was clicked (like button)
  if (event.target.matches(".like-button")) {
    // Find the closest parent element of whichever player's like button was clicked
    const player = event.target.closest(".player")
    // Find the element we want to update from the parent element
    const likeCount = player.querySelector(".likes")
    // Update the element's textContent
    likeCount.textContent = `${parseInt(likeCount.textContent) + 1} likes`
    // parseInt only converts a string to a number if the first number is an Integer
  }
})
