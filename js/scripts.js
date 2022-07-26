window.addEventListener('load', function(){

let form = document.querySelector('.form')
let send = document.querySelector('.send')
let checks = document.querySelectorAll('.check')
let patterns = {
    notEmpty: /^.+/,
    phone: /^\d{7,14}$/,
    email: /^.+@.+\..+$/
};

form.addEventListener('focusin', function(e){
    if (e.target.classList.contains('check')){
        e.target.classList.remove('err')
    }
})

form.addEventListener('submit', function(e){
    let err = false 
    // проверка на ошибку, чтобы e.preventDefault() срабатывал 1 раз 
    //и был только 1 alert

    for(let i=0; i<checks.length; i++){
        let inp = checks[i];
        inp.value = inp.value.trim();
        let pattern = patterns[inp.dataset.valid];

        if (!pattern.test(inp.value)){
            inp.classList.add('err');
            err = true 
        }  
    }
        if (err){
        e.preventDefault() 
        alert ('заполните все поля')
    }

    })

});
