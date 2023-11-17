

// FUNÇÃO DE MOTORISTA //
var regiao = document.getElementById('regiao')
var city = document.getElementById('city')
var titulore = document.getElementById('titulore')
var tituloCity = document.getElementById('titulocity')
function regiaoClick(){

    if(regiao.style.display = 'block'){
        city.style.display = 'none'
        titulore.style.background = 'white'
        titulore.style.padding = '0.2rem'
        tituloCity.style.textDecoration = 'none'
        tituloCity.style.background = 'transparent'
    }
}

function cityClick(){
    if(city.style.display = 'flex'){
        regiao.style.display = 'none'
        tituloCity.style.padding = '0.2rem'
        titulore.style.background = 'transparent'
        tituloCity.style.background = 'white'
        tituloCity.style.textDecoration = 'none'
    }
}

const burger = document.querySelector(".burger-container")
const items = document.querySelector(".header")

burger.addEventListener("click", () =>
items.classList.toggle("active"))

/*
function loader(){
    var car = document.querySelector('.car-cidade')
    document.querySelector('.loader-cidade').classList.add('fade-out')
}

function fadeOut(){
    setInterval(loader,2000)
}

window.onload = fadeOut
window.style.filter = `blur(${100}px)`
*/

function Procura(){
    var box = document.querySelector('.box-procurar')
    var car = document.querySelector('.car-cidade')
    var car2 = document.querySelector('.car-cidade2')
    var car3 = document.querySelector('.car-cidade3')
    if(car.style.display = 'flex'){
        car2.style.display = 'flex'
        car3.style.display = 'flex'
        box.style.display = 'none'
    }
}

function libera1(){
    var camaro = document.querySelector('.camaro-car')
    if(camaro.style.display = 'block'){

    }
}
function libera2(){
    var x1 = document.querySelector('.x1-car')
    if(x1.style.display = 'block'){

    }
}
function libera3(){
    var jetta = document.querySelector('.jetta-car')
        if(jetta.style.display = 'block'){

        }
}
let foquete = document.querySelector('.bmw-img')

window.addEventListener('scroll', function(){
    let value = window.scrollY
    foquete.style.top = 400 + value * -0.5 + '%'

})



