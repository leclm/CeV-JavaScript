// cria um array com esses elementos 
let numeros = [8, 2, 3, 5] 

// adiciona o elemento 9 na posição 3
numeros[3] = 3

// numeros[6] = 1  adiciona o elemento 1 na posição 6 e deixa as posições 4 e 5 vazias

// adiciona o 7 a ultima posição. Não adc na posição vazia!
numeros.push(7) 

console.log(`Nosso array é o: ${numeros}`)

// conta a posição vazia tbm, tem 6 elementos neste vetor. O length não vai parenteses pq em JS nao é um metodo, é um atributo. 
console.log(`O array tem ${numeros.length} elementos`) 

// mostra a posição da 1° ocorrencia do elemento 3
console.log(`O index do elemento 3 é ${numeros.indexOf(3)}`) 

// mostra -1 se o elemento nao estiver no vetor
console.log(`O elemento 555 não está no vetor: ${numeros.indexOf(555)}`) 

// ordena em ordem cresc, colocando as posições vazias por ultimo 
console.log(`O elementos ordenados são ${numeros.sort()}`) 

// PARA TIRAR OS [] E VIRGULAS 
for(let c = 0; c < numeros.length; c++) {
    console.log(numeros[c])
}
//-------------------------------------------------
let cont = 0
while (cont < numeros.length) {
    console.log(numeros[cont])
    cont++
}
//-------------------------------------------------
let contador = 0
do {
    console.log(numeros[contador])
    contador++
} while (contador < numeros.length)
//-------------------------------------------------
//só funciona para arrays e objetos, mas todo array é um objeto em JS.
for (let pos in numeros) {
    console.log(numeros[pos])
}