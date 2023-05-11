const email = document.getElementById("email")
const message = document.getElementById("message")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener('submit', (e) => {
    let messages = []
    if (email.value === "" || email.value == null) {
        messages.push('Inputs are required')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join (', ')
    }
})

