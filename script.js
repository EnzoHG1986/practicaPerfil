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
            <p class="name-follow">${producto.nombre}</p>
            <p class="nick-follow">${producto.username}</p>
        </div>
        <button class="btn-follow">Follow</button>
    </div>
    `
})

//  POSTEOS

const userPost = [
    {
        imagen: "/imagenes/Juan Pérez.jpg",
        nombre: "Juan Pérez",
        user: "@juanperez",
        tiempoPosteo: "2023-06-09 10:00:00",
        posteo: "¡Hola a todos! Hoy quiero compartirles esta increíble foto que tomé durante mis vacaciones en la playa. Disfruten",
        likes: 25,
        retweets: 10,
        comments: 112,
        photo:"/imagenes/paisaje.jpeg"
    },
    {
        imagen: "/imagenes/María Gómez.jpg",
        nombre: "María Gómez",
        user: "@mariagomez",
        tiempoPosteo: "2023-06-09 11:30:00",
        posteo: "¡Buenos días! Les comparto mi receta favorita de pancakes para comenzar el día con energía. ¡Espero que les guste!",
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Wa8ii23gKiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        likes: 50,
        retweets: 15,
        comments: 11
    },
    {
        imagen: "/imagenes/Carlos Rodríguez.jpg",
        nombre: "Carlos Rodríguez",
        user: "@carlosrodriguez",
        tiempoPosteo: "2023-06-09 14:45:00",
        posteo: "¡Partido de fútbol emocionante anoche! El equipo local logró una gran victoria. ¡Vamos por más!",
        likes: 100,
        retweets: 30,
        comments: 3
    },
    {
        imagen: "/imagenes/Ana Martínez.jpg",
        nombre: "Ana Martínez",
        user: "@anamartinez",
        tiempoPosteo: "2023-06-09 16:20:00",
        posteo: "Hoy es un día especial, ¡celebramos el cumpleaños de mi mejor amiga! Le deseo todo lo mejor en su nuevo año de vida.",
        likes: 75,
        retweets: 20,
        comments: 45,
        photo: "https://placekitten.com/300/200"
    },
    {
        imagen: "/imagenes/Pedro Sánchez.jpg",
        nombre: "Pedro Sánchez",
        user: "@pedrosanchez",
        tiempoPosteo: "2023-06-09 18:10:00",
        posteo: "¡Increíble concierto anoche! La banda tocó todas mis canciones favoritas. ¡No puedo esperar para el próximo!",
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/5hwFDGRsFfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        likes: 200,
        retweets: 50,
        comments: 12,
        
    },
    {
        imagen: "/imagenes/Laura López.jpg",
        nombre: "Laura López",
        user: "@lauralopez",
        tiempoPosteo: "2023-06-09 20:00:00",
        posteo: "¡Felicidades a mi hermana por su nuevo empleo! Estoy orgullosa de ti y sé que harás un excelente trabajo.",
        likes: 150,
        retweets: 40,
        comments: 20,
        photo: "https://placekitten.com/200/300"
    }
]


const postListHTML = document.querySelector('.container-post')

userPost.forEach((posteo) =>{
    postListHTML.innerHTML += `
    <br>
    <div class="container-single">
                    <div class="container-user">
                        <div class="img-user">
                            <img src="${posteo.imagen}" alt="">
                        </div>
                        <div class="date-user">
                            <h3>${posteo.nombre}</h3>
                            <P>${posteo.user}</P>
                            <div class="ico-menu">
                                <img src="./imagenes/3puntos.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="container-description">
                        <p class="posteo">${posteo.posteo}</p>
                        
                        ${posteo.video}
                        <img  class="img-descrip" src="${posteo.photo}" alt="">
                        
                    </div>
                    <div class="container-contadores">
                        <div class="container-ico">
                            <div class="contLike">
                                <img src="/imagenes/akar-icons_heart.png" alt="">
                            </div>
                            <div class="contRetweet">
                                <img src="/imagenes/ps_retweet-1.png" alt="">
                            </div>
                            <div class="contComment">
                                <img src="/imagenes/fa-regular_comment-dots.png" alt="">
                            </div>
                        </div>
                        <p class="contadores">${posteo.likes} Likes | ${posteo.retweets} Retweets | ${posteo.comments} Comments</p>
                    </div>
                    <div class="container-btnPost">
                        <div class="btn-contadores">
                            <img src="/imagenes/akar-icons_heart.png" alt="">
                            <p>Like</p>
                        </div>
                        <div class="btn-contadores">
                            <img src="/imagenes/ps_retweet-1.png" alt="">
                            <p>Retweet</p>
                        </div>
                        <div class="btn-contadores">
                            <img src="/imagenes/fa-regular_comment-dots.png" alt="">
                            <p>Comment</p>
                        </div>
                        <div class="btn-contadores">
                            <img src="/imagenes/fluent_share-ios-24-filled.png" alt="">
                            <p>Share</p>
                        </div>
                    </div>
                </div>
                `
})
