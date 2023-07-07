document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado
  
    // Obtenha os valores dos campos de email e senha
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Faça a validação dos campos ou envie os dados para o servidor
  
    // Exemplo simples de validação
    if (email === 'user@example.com' && password === '123456') {
      alert('Login bem-sucedido!');
      // Redirecione o usuário para a próxima página
    } else {
      alert('Email ou senha inválidos!');
    }
  });
  