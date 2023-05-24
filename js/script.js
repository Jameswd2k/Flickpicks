
let SAMPLE_CARDS = []
let ids = [];
   
const searchInput = document.querySelector("[data-search]")
const dataMovieTemplate = document.querySelector("[data-movie-template]")
const movieCardContainer = document.querySelector("[data-movie-card-container]")


const msg = "1"

function Toggle2() {
    

    document.getElementById("body6").innerHTML = "Result not found within the database"
    

}

function timeout(){
    
    setTimeout(Toggle2, 2000);
}

function same(){
    var x = document.getElementById("cards");
    if(window.getComputedStyle(x).display === "none" ){
        timeout();
        
    }
    else {
        console.log("error");
    } 
}

searchInput.addEventListener("input", (e) => {
    const test = ids.toString()
    const value = e.target.value.toLowerCase()
    ids.forEach(user => {
        const isVisible = user.title.toString().toLowerCase().includes(value) || user.genre.toString().toLowerCase().includes(value) || user.year.toString().toLowerCase().includes(value) 
        user.element.classList.toggle("hide", !isVisible);
    })
    same();
    
})



fetch("https://imdb-top-100-movies.p.rapidapi.com/", {
    method: 'GET',
	headers: {
	'X-RapidAPI-Key': '4af2ca0c30msh71b080dcf82b59dp1ff7d6jsn34e7fa638cae',
	'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }})
    .then(res => res.json())
    .then(data => {
        ids = data.map(id => {
           const card = dataMovieTemplate.content.cloneNode(true).children[0]
           const header = card.querySelector("[data-header]")
           const body1 = card.querySelector("[data-body1]")
           const body2 = card.querySelector("[data-body2]")
           const body3 = card.querySelector("[data-body3]") 
           const body5 = card.querySelector("[data-body5]")
           header.textContent = id.title
           body1.src = id.image
           body3.textContent = id.genre
           body5.textContent = id.year
           movieCardContainer.append(card)
           return { title: id.title, genre: id.genre, year: id.year, element: card}
        })
    })

    





