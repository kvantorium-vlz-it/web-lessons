const a = 5
let b = 'gmkawgmnkganklgesml;hes[ldmnojthmk'
// console.log(b)

b = 'vbzn'
// console.log(b)

// console.log(a + 15)

const arr1 = [1, 'строку', true, { a: 'значение поля а' }]

console.log(arr1)

for (let i = 0; i < 10; i++) {
    // if (i % 2 === 1) {
    //     console.log(`${i}: нечет`)
    // } else if (i % 2 === 0) {
    //     console.log(`${i}: чет`)
    // }

    // if (i % 2) {
    //     console.log(`${i}: нечет`)
    // } else {
    //     console.log(`${i}: чет`)
    // }

    const isOdd = i % 2
    console.log(`${i}: ${isOdd ? 'нечет' : 'чет'}`)
}

const root = (x) => Math.sqrt(x)
const power2 = (x) => Math.pow(x, 2)
const power3 = (x) => Math.pow(x, 3)

// function root(a) {
//     return Math.sqrt(a)
// }

// function power2(a) {
//     return Math.pow(a, 2)
// }

// function power3(a) {
//     return Math.pow(a, 3)
// }

const functionArray = [root, power2, power3]

functionArray.forEach((f) => {
    console.log(f(5))
})
