let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{ // Olhinho de revelar senha password para texto
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){ // Configuração do botão de entrar (login)
  let email = document.querySelector('#email')
  let emailLabel = document.querySelector('#emailLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgErro = document.querySelector('#msgErro')
  let listaUsers = []
  
  let emailValid = {
    nome: '',
    email: '',
    senha: ''
  }
  
  listaUsers = JSON.parse(localStorage.getItem('listaUsers'))
  
  listaUsers.forEach((item) => { // Verificar linha por linha do cadastro
    if(email.value == item.emailCad && senha.value == item.senhaCad){
       
      emailValid = {
         nome: item.nomeCad,
         email: item.emailCad,
         senha: item.senhaCad
       }
      
    }
  })
   
  if(email.value == emailValid.email && senha.value == emailValid.senha){
    window.location.href = './home.html' // Mexer depois que o index estiver pronto
    
    let mathRandom = Math.random().toString(7).substr(2) // Gera um token de autenticação de acesso
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(emailValid)) // Transforma em String
  } else {
    emailLabel.setAttribute('style', 'color: red') // Senão, aparece uma mensagem de usuário não encontrado
    email.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgErro.setAttribute('style', 'display: block')
    msgErro.innerHTML = 'Usuário ou senha estão incorretos'
    email.focus()
  }
  
}