function mostrarMensagem()
{
    const opcaoSelecionada = document.getElementById("bebida").value;
    let mensagem;

    switch (opcaoSelecionada)
    {
        case "cerveja":
            mensagem = "Uma caneca de cerveja gelada!";
            break;
        case "vinho":
            mensagem = "Uma taça de vinho tinto para você!";
            break;
        case "refrigerante":
            mensagem = "Um refrigerante refrescante está a caminho!";
            break;
        case "agua":
            mensagem = "Água mineral, uma escolha saudável!";
            break;
        default:
            mensagem = "Desculpe, não temos essa bebida no cardápio";
    }

    document.getElementById("mensagem").textContent = mensagem;
}