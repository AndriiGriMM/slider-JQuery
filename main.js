let form = document.querySelector('.form')
let submit = document.querySelector('.js--submit')
let from = form.querySelector('.js--number')
let fields = form.querySelectorAll('.input')
let checkInput = function (){
    const value = this.value;
    if (value.length > 16) {
        this.value = value.slice(0, 16);
    }
}
let genErrors = function(text){
    let error = document.createElement('div')
        error.className="error"
        from.style.border = "1px solid red"
        error.innerHTML= text
        return error
}
 let removeErr= function(){
    let errors= form.querySelectorAll('.error')

    for (let i = 0; i < errors.length; i++) {
        errors[i].remove()
    }
 }


 let checkFields = function(){
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i.value]){
         console.log("fields is blank", fields[i])
         let error = genErrors('cennot be blank')
         form[i].parentElement.insertBefore(error, fields[i])
        }
     }
 }
form.addEventListener('submit', function (event) {
    event.preventDefault()
    removeErr()
    checkFields ()
    checkInput()

})