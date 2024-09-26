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

//4-load
const loader = document.querySelector('.nav .nav-link')

window.addEventListener('load', function (event){
    loader.style.color = 'blue'
})

//5-dblclick
const textContent = document.querySelector('.text-content h2');

textContent.addEventListener('dblclick', (event) => {
    textContent.style.color = 'red'
})

//6-resize
const funInSunBtn = document.querySelector('.destination .btn')

window.addEventListener('resize', (event) => {
    funInSunBtn.style.background = 'pink'
})

//7-scroll
const logoHeading = document.querySelector('.logo-heading')

document.addEventListener('scroll', (event) => {
    logoHeading.style.fontSize = '8rem'
})

//8-focus
const navLink = document.querySelector('.nav .nav-link')

navLink.addEventListener('focus', (event) => {
    navLink.style.border = 'thick solid #0000FF'
})

//9-click
const funBtn = document.querySelector('.destination .btn');

funBtn.addEventListener('click', (event) => {
    funBtn.style.color = 'purple';
})

//10-contextmenu
const funBusImg = document.querySelector('.intro img');

funBusImg.addEventListener('contextmenu', (event) => {
    funBusImg.style.width = '50%';
})

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
const content = document.querySelector('.content-pick .destination h4')

content.addEventListener('click', (event) => {
    content.style.color = 'red'
    event.stopPropagation()
    console.log(`
    event type: ${event.type}
    event target: ${event.target.nodeName}
    current target: ${event.currentTarget.nodeName}
    timestamp: ${Math.floor(event.timeStamp / 1000)}
    `)
})

const content2 = document.querySelector('.content-pick')

content2.addEventListener('click', (event) => {
    content2.style.color = 'blue'
    console.log(`
    event type: ${event.type}
    event target: ${event.target.nodeName}
    current target: ${event.currentTarget.nodeName}
    timestamp: ${Math.floor(event.timeStamp / 1000)}
    `)
})