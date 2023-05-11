
SAMPLE_CARDS = [{
    movie_name : "Jumanji",
    image : "text",
    info : "This movie is about a board game that comes to life",
    genre : "Fantasy"
}, 
{   movie_name : "Lucy",
    image : "Text",
    info : "This movie is about a woman who becomes smarter",
    genre : "Action"}

]

const searchInput = document.querySelector("[data-search]")
const dataMovieTemplate = document.querySelector("[data-movie-template]")
const movieCardContainer = document.querySelector("[data-movie-card-container]")

let test = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    test.forEach(test => {
        const isVisible = test.movie_name.toLowerCase().includes(value) || test.genre.toLowerCase().includes(value)
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
    header.textContent = SAMPLE_CARDS.movie_name
    body1.textContent = SAMPLE_CARDS.image
    body2.textContent = SAMPLE_CARDS.info
    body3.textContent = SAMPLE_CARDS.genre
    movieCardContainer.append(card)
    console.log(SAMPLE_CARDS)
    return { movie_name: SAMPLE_CARDS.movie_name, genre: SAMPLE_CARDS.genre, element: card}
    });
})

Display();