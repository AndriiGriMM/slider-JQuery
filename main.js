let form = document.querySelector('.form')
let submit = document.querySelector('.js--submit')
let from = form.querySelector('.js--number')
let fields = form.querySelectorAll('.input')


form.addEventListener('submit', function (event) {
    event.preventDefault()
    let errors= form.querySelectorAll('.error')

    for (let i = 0; i < errors.length; i++) {
        errors[i].remove()
    }
    
    for (let i = 0; i < fields.length; i++) {
       if (!fields[i.value]){
        console.log("fields is blank", fields[i])
        let error = document.createElement('div')
        error.className="error"
        from.style.border = "1px solid red"
        error.innerHTML= "cennot be blank"
        form[i].parentElement.insertBefore(error, fields[i])
       }
    }
})


from.addEventListener('input',function (arg) {
    this.value = Number( this.value.substr(0,15))
    if(isNaN(this.value)) {
       
    }
})