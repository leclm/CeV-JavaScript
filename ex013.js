var now = new Date()
var time = now.getHours()
console.log(`A hora atual é ${time} horas`)
if (time < 5) {
    console.log('Boa madrugada!')
} else if (time < 12) {
    console.log('Bom dia!')
} else if (time <= 18) {
        console.log('Boa tarde!')
} else if (time <= 24) {
        console.log('Boa noite!')
}