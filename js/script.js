const btn = document.querySelector('#btn');
const colorSpan = document.querySelector('.color')

const color = [
    "#ad3b3b", "#b57238", "#ab9f30", 
    "#848f0e", "#54960c", "#1876a8", 
    "#6c1fc4", "#8a2da1", "#b8b2b7"
]

btn.addEventListener('click', function(){
    console.log('click')
    document.body.style.backgroundColor = color[getColor()];
    colorSpan.innerHTML = color[getColor()];
});

function getColor(){
    return Math.floor(Math.random() * color.length)
}

