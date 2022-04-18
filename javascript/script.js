const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

printPage();

// Funzione per stampare la pagina
function printPage() {
    // salvo il container
    const container = document.getElementById("container");
    // ciclo per creare un post per ogni oggetto dell'array
    posts.forEach(element => {
        // creazione struttura post
        const post = document.createElement("div");
        post.setAttribute("class", "post");
        const post__header = document.createElement("div")
        post__header.setAttribute("class", "post__header");
        const post__text = document.createElement("div")
        post__text.setAttribute("class", "post__text");
        const post__image = document.createElement("div")
        post__image.setAttribute("class", "post__image");
        const post__footer = document.createElement("div")
        post__footer.setAttribute("class", "post__footer");
        // inserimento dati nell'intestazione del post
        post__header.innerHTML = `
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.author.name}</div>
                    <div class="post-meta__time">4 mesi fa</div>
                </div>                    
            </div>
        `;
        // inserimento contenuto del post
        post__text.innerHTML = element.content;
        // inserimento immagine del post
        post__image.innerHTML = `
            <img src="${element.media}" alt="${element.author.name}'s media">
        `;
        // inserimento dati nel footer del post
        post__footer.innerHTML = `
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                </div>
            </div> 
        `;
        // aggancio tutte le sezioni al post
        post.append(post__header, post__text, post__image, post__footer);
        // aggancio il post al container
        container.append(post);
    });
}