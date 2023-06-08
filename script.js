//  MENU DESPLEGABLE


const btnMenu = document.getElementById('btn-menu')
const navbarHTML = document.getElementById('navbar')
btnMenu.addEventListener('click', ()=>{
    navbarHTML.classList.toggle('oculto')
})




//  USER FOLLOW



const userFollow = [
    {
        nombre: 'Milli Smith',
        username:'@Milli1243',
        image: './imagenes/Ellipse 2.png'
    },
    {
        nombre: 'Tyrese',
        username:'@codewithtyris',
        image: './imagenes/Ellipse 3.png'
    },
    {
        nombre: 'Mike Jr.',
        username:'@mikkey',
        image: './imagenes/Ellipse 4.png'
    },
]
const recomendedListHTML = document.querySelector('.container-people-follow')

userFollow.forEach((producto) =>{
    recomendedListHTML.innerHTML += `
    <div class="follow-user">
        <div class='img-follow'>
            <img src="${producto.image}" alt="" class="img-follow">
        </div>
        <div class="date-follow">
            <p class="name-follow">${producto.name}</p>
            <p class="nick-follow">${producto.username}</p>
        </div>
        <button class="btn-follow">Follow</button>
    </div>
    `
})


