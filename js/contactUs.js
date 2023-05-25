const email = document.getElementById("email")
const message = document.getElementById("message")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")
var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

form.addEventListener('submit', (e) => {
    let messages = []
    if (email.value.match(mailFormat))
    {
        return True}
    else{
        messages.push("You have entered an invalid email address.")
    }


    if (email.value === "" || email.value == null)  {
        messages.push('Inputs are required')
    }

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join (', ')
    }
})
