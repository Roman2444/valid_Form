window.addEventListener('load', function(){

let form = document.querySelector('.form')
let send = document.querySelector('.send')
let checks = document.querySelectorAll('.check')

form.addEventListener('input', function(e){
    if (e.target.classList.contains('check')){
        e.target.classList.remove('err')
    }
})

form.addEventListener('submit', function(e){
    let err = false 
    // проверка на ошибку, чтобы e.preventDefault() срабатывал 1 раз 
    //и было только 1 предупреждение

    for(let i=0; i<checks.length; i++){
        if (!checks[i].value){
            checks[i].classList.add('err')
            err = true 
        }  
    }
        if (err){
        e.preventDefault() 
        alert ('заполните все поля')
    }

    })



});
