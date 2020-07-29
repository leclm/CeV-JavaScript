function gerador() {
    var n = window.document.getElementById('n')
    var num = Number(n.value)
    var r = window.document.querySelector('div#resp')
    if (num.length == 0) {
        window.alert('[ERRO] Escolha um número!')
    }
    r.innerHTML = `Tabuada do ${num}<br>`
    for (var c = 0; c <= 10; c++) {
        r.innerHTML += `<br>${num} x ${c} = ${num*c}`
    }
}