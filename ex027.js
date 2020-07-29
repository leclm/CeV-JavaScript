let amigo = {
    nome: 'Luiz',
    sexo: 'M', 
    peso: 86.3, 
    engordar(p=0) {
        console.log('Engordou!')
        this.peso += p
    },
    emagrecer(p=0) {
        console.log('Emagreceu!')
        this.peso -= p
    }

}

console.log(`O ${amigo.nome} pesa ${amigo.peso} kg`)
amigo.engordar(3)
console.log(`O ${amigo.nome} ${amigo.peso} kg`)
amigo.emagrecer(8)
console.log(`O ${amigo.nome} ${amigo.peso} kg`)

typeof(amigo) // tanto um array [] quanto um objeto {} são do tipo object, pois têm origem da mesma classe