function fazerLogin()
{
    const username = document.getElementById("usuário").value;
    const password = document.getElementById("senha").value;
    if (username === "Raphael" && password === "123456")
    {
        console.log("Login bem-sucedido!");
        document.getElementById("resultado").innerHTML = "Login bem-sucedido!";
    }
    else
    {
        console.log("Credenciais incorretas, tente novamente.");
        document.getElementById("resultado").innerHTML = "Credenciais incorretas, tente novamente.";
    }
}