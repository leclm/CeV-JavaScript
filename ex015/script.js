function carregar() {
    var mensagem = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var now = new Date()
    var hora = now.getHours()
    var min = now.getMinutes()
    mensagem.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    if (hora > 4 && hora < 12) {
        foto.src = "manha.jpg"
        window.document.body.style.backgroundColor = '#f5e0b4'
    } else if (hora >= 12 && hora < 18) {
        foto.src = "tarde.jpg"
        window.document.body.style.backgroundColor = '#a57203'
    } else if (hora >= 18 || hora <= 4) {
        foto.src = "noite.jpg"
        window.document.body.style.backgroundColor = '#2f3a58'
    }
}