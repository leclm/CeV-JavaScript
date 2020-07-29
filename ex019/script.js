function contador() {
    let startBox = window.document.getElementById('start')
    let stopBox = window.document.getElementById('stop')
    let stepBox = window.document.getElementById('step')
    let resultado = window.document.querySelector('div#resultado')
    
    if (startBox.value.length == 0 || stepBox.value.length == 0 || stopBox.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        resultado.innerHTML = 'Impossível contar!'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let start = Number(startBox.value)
        let step = Number(stepBox.value)
        let stop = Number(stopBox.value)
        if (step <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            step = 1
        }
        if (start < stop) {
           for(let c = start; c <= stop; c += step) {
               resultado.innerHTML += ` ${c} \u{1F449}`
            } 
        } else if (start > stop) {
            for (let c = start; c >= stop; c -= step) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }  
        /*resultado.innerHTML += `\u{1F916}`
        resultado.innerHTML += `\u{1F47E}`       
        resultado.innerHTML += `\u{1F46E}` */

        resultado.innerHTML += `\u{1F3F3}`
        resultado.innerHTML += `\u{FE0F}`
        resultado.innerHTML += `\u{200D}`
        resultado.innerHTML += `\u{1F308}`
    }
}
