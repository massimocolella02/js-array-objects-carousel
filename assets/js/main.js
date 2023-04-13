const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const first = images[0];
const last = images[images.length - 1];

//Ciclo che stampa le immagini nel DOM ma solo la prima attiva
for(let i=0; i < images.length; i++){
    if( images[i] == first){
        document.querySelector('#slider').innerHTML+=`
        <div class="item d-block first">
            <img src="./assets/${images[i].image}" alt="" class="d-block">
            <div class="paragraph">
                <h2>${images[i].title}</h2>
                <p>${images[i].text}</p>
            </div>
        </div>
        `
    }else if(images[i] == last){
        document.querySelector('#slider').innerHTML+=`
        <div class="item d-none last">
            <img src="./assets/${images[i].image}" alt="" class="d-block">
            <div class="paragraph">
                <h2>${images[i].title}</h2>
                <p>${images[i].text}</p>
            </div>
        </div>
        `
    }else {
        document.querySelector('#slider').innerHTML+=`
        <div class="item d-none">
            <img src="./assets/${images[i].image}" alt="" class="d-block">
            <div class="paragraph">
                <h2>${images[i].title}</h2>
                <p>${images[i].text}</p>
            </div>
        </div>
        `
    }
}


//Next
document.querySelector('.fa-circle-right').addEventListener('click', function(){
    let imgAttiva = document.querySelector('#slider .item.d-block');
    let imgDaAttivare = imgAttiva.nextElementSibling;

    if( imgAttiva.classList.contains('last') ){
        imgDaAttivare = document.querySelector('.first')
    }

    //Rimozione immagine precedente
    imgAttiva.classList.remove('d-block');
    imgAttiva.classList.add('d-none');

    //Apparizione immagine successiva
    imgDaAttivare.classList.remove('d-none');
    imgDaAttivare.classList.add('d-block');
})

//Prev
document.querySelector('.fa-circle-left').addEventListener('click', function(){
    let imgAttiva = document.querySelector('#slider .item.d-block');
    let imgDaAttivare = imgAttiva.previousElementSibling;

    if( imgAttiva.classList.contains('first') ){
        imgDaAttivare = document.querySelector('.last')
    }

    //Rimozione immagine precedente
    imgAttiva.classList.remove('d-block');
    imgAttiva.classList.add('d-none');

    //Apparizione immagine successiva
    imgDaAttivare.classList.remove('d-none');
    imgDaAttivare.classList.add('d-block');
})


//thumbnails
for(let i=0; i < images.length; i++){
    document.querySelector('#thumbnails').innerHTML+=` 
    <div class="thumbs">
        <img class="thumb" src="./assets/${images[i].image}" alt="">
    </div>`

}

const thumbs = document.querySelectorAll('.thumb');
const slider = document.querySelector('.slider');

thumbs.forEach(thumb => {
    thumb.addEventListener('click', function(){
        let imgAttiva = document.querySelector('#slider .item.d-block');

        imgAttiva.classList.add("d-block")

        document.querySelector('.item img').setAttribute("src", thumb.getAttribute("src"))
    });
});

