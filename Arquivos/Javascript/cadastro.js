let btn = document.querySelector('#verSenha') // Acessar o documento HTML e procurar a classe indicada
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false // Variável boolean para validação dos campos de preenchimento

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgErro = document.querySelector('#msgErro')
let msgSucesso = document.querySelector('#msgSucesso')

nome.addEventListener('keyup', () => { // Add o evento se o nome for menor ou igual a dois, muda a fonte para "red"
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira no mínimo três caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green') // Senão, altera para "green" positivo para cadastro
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

email.addEventListener('keyup', () => {
    if(email.value.length <= 9){
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'E-mail *Não esqueça do @webmail.com'
        email.setAttribute('style', 'border-color: red')
        validEmail = false
    } else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'E-mail'
        email.setAttribute('style', 'border-color: green')
        validEmail = true
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *A senha deve conter no mínimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', () => {
    if(senha.value != confirmSenha.value){ // Se a senha for diferente da confirmação de senha
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Confirmar Senha *A senha não confere com a anterior'
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirmSenha = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style', 'border-color: green')
        validConfirmSenha = true
    }
})

function cadastrar(){ // Cria a função do botão de cadastro
    if(validNome && validEmail && validSenha && validConfirmSenha){

        let listaUsers = JSON.parse(localStorage.getItem('listaUsers') || '[]') // Guardar cadastro através do localStorage
        
        listaUsers.push(
            {
                nomeCad: nome.value,
                emailCad: email.value,
                senhaCad: senha.value
        }
    )

    localStorage.setItem('listaUsers', JSON.stringify(listaUsers)) // Validção de cadastro ou mensagem de preenchimento

        msgSucesso.setAttribute('style', 'display: block')
        msgSucesso.innerHTML = '<strong> Parabéns, o seu cadastro foi criado! </strong>'
        msgErro.setAttribute('style', 'display: none')
        msgErro.innerHTML = ''

        setTimeout(()=> {
            window.location.href='../HTML/login.html'
        }, 2000)

    } else {
        msgErro.setAttribute('style', 'display: block')
        msgErro.innerHTML = '<strong> É necessário preencher todos os campos abaixo: </strong>'
        msgSucesso.innerHTML = ''
        msgSucesso.setAttribute('style', 'display: none')
    }
}

btn.addEventListener('click', ()=>{ // Adicionar ao botão um evento de "click"
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){ // Se o input for igual ao tipo senha
        inputSenha.setAttribute('type', 'text') // Troque para o tipo texto (visível)
    } else {
        inputSenha.setAttribute('type', 'password') // Senão troque para o tipo senha novamente
    }
}) 

btnConfirm.addEventListener('click', ()=>{
    let inputConfirmSenha = document.querySelector('#confirmSenha')

    if(inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
}) 