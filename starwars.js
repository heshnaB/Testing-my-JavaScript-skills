// Main goal: Retrieve random character information, so when you click a button, it fetches data.

const name = document.getElementById("name");
const height = document.getElementById("height");
const eye_color = document.getElementById("eye_color");
const button = document.querySelector(".randomNum");

button.addEventListener('click', (e) => {
  e.preventDefault()
  const personNum = Math.floor(Math.random()*83)
  fetch(`https://swapi.dev/api/people/${personNum}/`)
    .then(response => response.json())
    .then(character => {
      name.innerHTML = character['name']
      height.innerHTML = character['height']
      eye_color.innerHTML = character['eye_color']
    })
})


