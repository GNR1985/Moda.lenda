document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verifica se já existe uma conta com esse e-mail
    const userData = JSON.parse(localStorage.getItem('userData')) || [];

    // Procura um usuário com o email fornecido
    const existingUser = userData.find(user => user.email === email);

    // Se o usuário já existir, verifica a senha
    if (existingUser) {
        if (existingUser.password === password) {
            // Se a senha estiver correta, faça login
            localStorage.setItem('userLoggedIn', 'true');
            alert('Login bem-sucedido!');
            window.location.href = 'finalizar.html'; // Redirecione para a página inicial ou de destino
        } else {
            // Senha incorreta
            document.getElementById('message').textContent = 'Senha incorreta!';
        }
    } else {
        // Usuário não encontrado
        document.getElementById('message').textContent = 'Usuário não encontrado! Por favor, registre-se.';
    }
});
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário de registro
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Verifica se já existe uma conta com esse e-mail
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    const existingUser = userData.find(user => user.email === email);

    if (existingUser) {
        // Conta já existe
        alert('Já existe uma conta com esse e-mail. Faça login ou use um e-mail diferente.');
    } else {
        // Cria uma nova conta
        userData.push({ email: email, password: password });
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Conta criada com sucesso! Você pode fazer login agora.');
    }
});