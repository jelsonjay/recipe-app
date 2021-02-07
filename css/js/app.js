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
const url = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}&to=30`;
const res = await fetch(url)
const data = await res.json()
console.log(data)
}