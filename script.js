
//Prototype chaining  demo

const student1 = {
  name: "Asma"
}

const student2 = {
    email: "asma@gmail.com"
}

Object.setPrototypeOf(student1, student2);

console.log(student2.name)


//Destructuring demo

const student = {
  name: "Asma",
  age: 21
}

const { Fullname, student_age } = student

console.log(Fullname)
console.log(student_age)





//Spread Operator demo

const number = [1, 2, 3, 4, 5]
const newNumber = [...number, 6, 7,8]

console.log(newNumber)




//Iterator demo

const ite = {
  count: 1

  next(){
    if (this.count <= 3) {
      return {
        value: this.count++,
        done: false
      }
    }
    return {
      done: true
    }
  }
}

console.log(ite.next())
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

