const person = {}

person.name = 'Lucas'
person.year = 32
person.color = 'White'
person.club = 'Internacional'

console.log(person)

// []

const car = {
    rodas: 4,
    portas: 4,
};

car['cor'] = 'vermelho';

console.log(car);

const novoCar = 'rodas';

car[novoCar] = 8;

console.log(car)

console.log(car[novoCar]);

// object => defineProperty

/*Object.defineProperty(car, 'motor', {
    value: 2.0,
    writable: false
})

console.log(car)
*/


