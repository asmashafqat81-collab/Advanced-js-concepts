const student1 = {
  name: "Asma"
};

const student2 = {
    email: "asma@gmail.com"
};

Object.setPrototypeOf(student1, student2);

console.log(student2.name);