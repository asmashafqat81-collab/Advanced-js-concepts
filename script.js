
//Destructuring demo

const student1 = {
  name: "Asma"
}

const student2 = {
    email: "asma@gmail.com"
}

Object.setPrototypeOf(student1, student2);

console.log(student2.name)



//Chaining demo

let num=[1,2,3,4,5,6,7,8,9]
const newnum=num
.map( (val)=> val*10 )
.map( (val)=> val+1)

console.log(newnum)


//Spread Operator demo

const number = [1, 2, 3, 4, 5]
const newNumber = [...number, 6, 7,8]

console.log(newNumber)


//Iterator demo

const fruit = ["Apple", "Banana", "orange"]

const ite = fruit[Symbol.ite]()

console.log(ite.next())
console.log(ite.next())
console.log(ite.next())

//generator demo

function* count() {
  yield 1
  yield 2
  yield 3
}
const gen = count()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
