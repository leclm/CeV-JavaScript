function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERR0] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade =  ano - Number(fano.value)
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            if (idade >= 0 && idade <= 10) {
                gênero = '<strong>menina</strong>'
                img.setAttribute('src', 'mcriança.png')
            } else if (idade < 21) {
                gênero = '<strong>adolescente</strong>'
                img.setAttribute('src', 'mjovem.png')
            } else if (idade < 60) {
                gênero = '<strong>mulher adulta</strong>'
                img.setAttribute('src', 'madulta.png')
            } else {
                gênero = '<strong>mulher adulta</strong>'
                img.setAttribute('src', 'midosa.png')
            }
        } else if (fsex[1].checked) {
            if (idade >= 0 && idade <= 10) {
                gênero = '<strong>menino</strong>'
                img.setAttribute('src', 'lucas.png')
            } else if (idade < 21) {
                gênero = '<strong>adolescente</strong>'
                img.setAttribute('src', 'hjovem.png')
            } else if (idade < 60) {
                gênero = '<strong>homem adulto</strong>'
                img.setAttribute('src', 'hadulto.png')
            } else {
                gênero = '<strong>homem adulto</strong>'
                img.setAttribute('src', 'hidoso1.png')
            }
        } 

        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos!</p>`
        res.appendChild(img)
    }
}