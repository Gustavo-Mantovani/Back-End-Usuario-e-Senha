// Função para registrar um novo usuário
document.getElementById("signup-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find(user => user.username === username)) {
        alert("Este nome de usuário já está em uso.");
        return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Usuário cadastrado com sucesso!");
    window.location.href = "login.html";
});

// Função para login
document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Login bem-sucedido!");
        window.location.href = "home.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
});

// Função de logout
function logout() {
    window.location.href = "login.html";
}
