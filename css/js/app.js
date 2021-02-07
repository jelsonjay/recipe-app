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
let handledHTML = '';
results.map(item => {
handledHTML += `
<div class="card">
<a href="${item.recipe.url}" target='_blank'> 
<img src="${item.recipe.image}" alt="Recipe"> 
</a>
  <div class="flex-content">
  <h1 class="title">${item.recipe.label}</h1>
  </div>
 <p class="card-info">Calories: ${item.recipe.calories.toFixed(2)}</p>
 <p class="card-info">Diet:${item.recipe.dietLabels}</p>
  <p class="card-info">Health: ${item.recipe.healthLabels}</p>
  <a class="read-more" href="${item.recipe.url}" target='_blank'>Read More</a>
  </div>
`
})
searchR.innerHTML = handledHTML;
}