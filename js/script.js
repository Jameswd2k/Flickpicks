
SAMPLE_CARDS = [{
    movie_name : "Jumanji: Welcome to the Jungle",
    image : "text",
    info : "This movie is about a board game that comes to life",
    genre : "Action", 
    genre2 :  ""
}, 
{   movie_name : "Hitman & Bodyguard 2",
    image : "Text",
    info : "This movie is about hitmen protecting an important client",
    genre : "Action",
    genre2 :  "Comedy"
},
{   movie_name : "Shang-Chi",
    image : "Text",
    info : "This movie is about a superhero discovering his power",
    genre : "Action", 
    genre2 : "Sci-Fi"
},
{   movie_name : "Eternals",
    image : "Text",
    info : "This movie is about ancient guardians of the Earth",
    genre : "Action", 
    genre2 : "Sci-Fi"
},
{   movie_name : "Spectre",
    image : "Text",
    info : "This movie is about James Bond infiltrating a secret society",
    genre : "Action",
    genre2 :  ""
},
{   movie_name : "Money Heist",
    image : "Text",
    info : "This movie is about pulling off the greatest ever heist",
    genre : "Action",
    genre2 : "Sci-Fi"
},
{   movie_name : "The Wolverine",
    image : "Text",
    info : "This movie is about the origins of Logan the Wolverine",
    genre : "Action",
    genre2 : "Sci-Fi"
},
{   movie_name : "Johnny English",
    image : "Text",
    info : "This movie is about Johnny English the sophisitcated and suave English spy",
    genre : "Action",
    genre2 : "Comedy" 
}

]

   
const searchInput = document.querySelector("[data-search]")
const dataMovieTemplate = document.querySelector("[data-movie-template]")
const movieCardContainer = document.querySelector("[data-movie-card-container]")

let test = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    test.forEach(test => {
        const isVisible = test.movie_name.toLowerCase().includes(value) || test.genre.toLowerCase().includes(value) || test.genre2.toLowerCase().includes(value) 
        test.element.classList.toggle("hide", !isVisible)
    })
    
    console.log(test)
})

const data = SAMPLE_CARDS

const Display = (SAMPLE_CARDS => {
    test = data.map(SAMPLE_CARDS => {
    const card = dataMovieTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector("[data-header]")
    const body1 = card.querySelector("[data-body1]")
    const body2 = card.querySelector("[data-body2]")
    const body3 = card.querySelector("[data-body3]") 
    const body4 = card.querySelector("[data-body4]")
    header.textContent = SAMPLE_CARDS.movie_name
    body1.textContent = SAMPLE_CARDS.image
    body2.textContent = SAMPLE_CARDS.info
    body3.textContent = SAMPLE_CARDS.genre
    body4.textContent = SAMPLE_CARDS.genre2

    movieCardContainer.append(card)
    console.log(SAMPLE_CARDS)
    return { movie_name: SAMPLE_CARDS.movie_name, genre: SAMPLE_CARDS.genre, genre2: SAMPLE_CARDS.genre2, element: card}
    });
})

Display();