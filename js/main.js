//Se os campos estiverem vazios o botão login fica desabilitado (alterar de disabled)

var tags = document.querySelectorAll('.text input')
var btn = document.querySelector('.btn')

function check() {
    if(tags[0].value != '' && tags[1].value != '') 
        btn.disabled = false;
    else
        btn.disabled = true;
}

tags[0].addEventListener("keyup",check)
tags[1].addEventListener("keyup",check)

//Mostrar a opção de mostrar a senha digitada (alterar o campo password para text)

document.querySelector('.show-password').addEventListener('click', function() {
    if(this.classList[2] === 'fa-eye-slash') {
        this.classList.remove('fa-eye-slash')
        this.classList.add('fa-eye')
        tags[1].type = 'text'
    } else {
        this.classList.remove('fa-eye')
        this.classList.add('fa-eye-slash')
        tags[1].type = 'password'
    }
})

