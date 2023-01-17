var form = document.getElementById('form')
form.addEventListener('submit',function(event){
    event.preventDefault()
    var username = document.getElementById('username-input').value
    console.log(username)
    var email = document.getElementById('email-input').value
    console.log(email)
    var message = document.getElementById('message-input').value
    console.log(message)
})
