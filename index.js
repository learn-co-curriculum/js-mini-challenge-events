/***** Beginning of Starter Code ****/
const goalList = document.querySelector("#goals")

/*
renderGoal function 
- takes in a goal object { id, link, description}
- creates elements:
  <li data-id="{goal id}">
    <p>{goal description}</p>
    <a href="{goal link}" target="_blank">{goal link}</a>
  </li>
- appends to the goalList
*/ 
function renderGoal(goal) {
  const li = document.createElement("li")
  li.dataset.id = goal.id

  const p = document.createElement("p")
  p.textContent = goal.description

  const a = document.createElement("a")
  a.href = goal.link
  a.target = "_blank"
  a.textContent = goal.link
  
  li.append(p, a)

  goalList.append(li)
}

/*
renderPlayer function
- takes in a player object { name, nickname, photo, likes, goals }
- updates the DOM using the player info
- renders the goals using the renderGoal function
*/ 
function renderPlayer(player) {
  const img = document.querySelector(".player img")
  img.src = player.photo
  img.alt = player.name

  const name = document.querySelector(".player h2")
  name.textContent = player.name

  const nickname = document.querySelector(".player em")
  nickname.textContent = player.nickname

  const likes = document.querySelector(".player .likes")
  likes.textContent = `${player.likes} Likes`

  player.goals.forEach(renderGoal)
}

// render the player from the data.js file
renderPlayer(player)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
function toggleColor(element) {
  if (element.target.style.color === "red") {
    element.target.style.color = "black"
  } else {
    element.target.style.color = "red"
  }
}

header.addEventListener("click", toggleColor)

/***** Deliverable 2 *****/
const likeButton = document.querySelector(".like-button")
likeButton.addEventListener("click", like)

function like(){
  const popularity = document.querySelector(".likes")
  const likes = parseInt(popularity.textContent) + 1
  popularity.textContent = `${likes} Likes`
}

/***** Deliverable 3 *****/
const addGoalVideo = document.querySelector("#new-goal-form")
addGoalVideo.addEventListener("submit", newGoalVideo)

function newGoalVideo(event) {
  event.preventDefault() // Need to always add this always always !
  const link = event.target.link.value
  const description = event.target.description.value
  goal = {
    link: link,
    description:description
  }
  renderGoal(goal)
  event.target.reset()}

  // Everything seems to work :D 
