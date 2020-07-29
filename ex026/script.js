let num = window.document.querySelector('input#fnum')
let res = window.document.querySelector('div#resultado')
let list = window.document.querySelector('select#flist')
let valores = []


// esse n é uma parâmetro FORMAL. Essa função vê se o valor está no intervalo estipulado
function isNumber(n) { 
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
// n e l são parâmetros FORMAIS. Essa função vê se o numero ja esta na lista
function inList(n, l) { 
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
// esta função adc o valor no array e mostra no select
function adc() {
    //list.innerHTML = ''
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let valor = window.document.createElement('option')
        valor.innerHTML = `O valor ${num.value} foi adicionado`
        valor.value = `list${num.value}`
        list.appendChild(valor)
        res.innerHTML = ''
    } else {
        window.alert('[ERRO] Valor fora do limite ou já adicionado!')
    }
    num.value = ''
    num.focus()
}

function sum(list) {
    let soma = 0
    for(let c = 0; c < list.length; c++) {
        soma += list[c]
    }
    return soma
}

function finish() {
    if (valores.length != 0) {
        res.innerHTML = `Foram adicionados ${valores.length} valores <br>`
        res.innerHTML += `Os valores são: ${valores} <br>`
        res.innerHTML += `O maior valor é: ${Math.max(...valores)} <br>`
        res.innerHTML += `O menor valor é: ${Math.min.apply(Math, valores)} <br>`
        res.innerHTML += `A soma dos valores é ${sum(valores)} <br>`
        res.innerHTML += `A média dos valores é ${sum(valores)/valores.length} <br>`
    } else {
        res.innerHTML = 'Selecione pelo menos um valor!'
    }
}
