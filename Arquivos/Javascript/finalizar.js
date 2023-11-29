if(localStorage.getItem('token') == null){
    alert("Você precisa estar logado para acessar essa página");
     window.location.href = "../HTML/home.html";
 }
 
 const userLogado = JSON.parse(localStorage.getItem("userLogado"));

 const logado = document.querySelector("#logado");
 logado.innerHTML = `<em>&nbsp;&nbsp;Olá, ${userLogado.nome}</em>`;

 setTimeout(()=> {
  window.location.href='../HTML/home.html'
}, 8000)