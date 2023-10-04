const formulario = document.getElementById("formulario");
const nome_usuárioEntrada = document.getElementById("nome_usuário");
const mensagem = document.getElementById("mensagem")

formulario.addEventListener("submit", function(event))
{
    event.preventDefault();
    const nome_usuário = nome_usuárioEntrada.value;
    if (nome_usuário)
    {
        if (/^[a-zA-Z][a-zA-Z0-9_-](4, 14)$/.text(nome_usuário) && nome_usuário.lenght >=  5 && nome_usuário.lenght <= 15)
        {
            mensagem.textContent = "Nome de usuário válido";
            mensagem.style.color = "green";
        }
        else
        {
            mensagem.textContent = "Nome de usuário inválido. Por favor, siga as regras.";
            mensagem.style.color = "red";
        }
        else
        {
            mensagem.textContent = "Por favor, insira um nome de usuário.";
            mensagem.style.color = "red"
        }
    }
}