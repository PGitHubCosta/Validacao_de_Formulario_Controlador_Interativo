const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const idade = document.getElementById("idade").value;

  const erro = document.getElementById("erro");

  erro.textContent = "";

  if (nome.trim() === "") {
    event.preventDefault();
    erro.textContent = "O nome é obrigatório.";
    return;
  }

  if (!email.includes("@")) {
    event.preventDefault();
    erro.textContent = "Email inválido.";
    return;
  }

  if (idade <= 0) {
    event.preventDefault();
    erro.textContent = "A idade deve ser maior que 0.";
    return;
  }

  alert("Formulário enviado com sucesso!");
});
