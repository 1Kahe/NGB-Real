const form = document.getElementById('formProblema');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
  event.preventDefault();  

  const tipo = document.getElementById('tipo').value;
  const descricao = document.getElementById('descricao').value;

  mensagem.innerHTML = `Problema enviado com Sucesso!<br> Aguarde que entraremos em contato`;

  form.reset(); 
});
