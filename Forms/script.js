document.getElementById("toggle-password").addEventListener("change", function() {
    let password = document.getElementById("password");
    password.type = this.checked? "text": "password";
});

document.getElementById("toggle-password-2").addEventListener("click", function() {
    let password = document.getElementById("password-2");
    password.type = password.type === "password"? "text": "password";
    this.textContent = password.type === "password"? "🙈": "🐵";
});