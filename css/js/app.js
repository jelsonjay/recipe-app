'use strict'
const searchF = document.querySelector('form')
const searchR = document.querySelector('.result')
const wrap = document.querySelector('.wrapper')
let searchQ = ''
const APP_ID = '3c91147a'
const APP_KEY = '52da7fb0d89e7c031eb4899c39f9e489'


searchF.addEventListener('submit', (event) => {
event.preventDefault()
searchQ = event.target.querySelector('input').value;
fetchAPI()

})

async function fetchAPI(){
const url = `https://api.edamam.com/search?q=${searchQ}&app_id=${APP_ID}&app_key=${APP_KEY}&to=30`;
const res = await fetch(url)
const data = await res.json()
handleHTML(data.hits)
console.log(data)
}
function handleHTML(results){
//wrapper.classList.remove('initial')
let handledHTML = '';
results.map(item => {
handledHTML += `
<div class="card">
<img src="${item.recipe.image}" alt="Recipe">
  <div class="flex-content">
  <h1 class="title">${item.recipe.label}</h1>
  <a class="read-more" href="${item.recipe.url}" target='_blank'>Read More</a>
  </div>
 <p class="card-info">Calories: ${item.recipe.calories.toFixed(2)}</p>
 <p class="card-info">Diet:${item.recipe.dietLabels.lenght > 0 ? item.recipe.dietLabels.lenght : 'No Data Found'}</p>
  <p class="card-info">Health: ${item.recipe.healthLabels}</p>
</div>
`
})
searchR.innerHTML = handledHTML;
}