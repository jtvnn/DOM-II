// Your code goes here
//1-mouseover
const busImg = document.querySelector('.intro img')

busImg.addEventListener('mouseover', function (event){
    busImg.style.border = 'thick solid #0000FF'
})

//2-keydown
const mapImg = document.querySelector('.img-content img');

document.addEventListener('keydown', function (event){
    if(event.key === 'Escape'){
        mapImg.style.border = 'thick solid #0000FF'
    }
})

//3-wheel
const introH2 = document.querySelector('.intro h2')

introH2.addEventListener('wheel', function (event) {
    introH2.style.transform = 'rotate(30deg)'
})