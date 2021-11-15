export {};

/*EXPICIT TYPES*/
//* Basic Types

let id: number = 5
let company: string = 'ITR VN'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

//ANY TYPES:
let variable:any
variable = 10
variable = 'Hello'
variable = {a: '1', b:'2'}
variable=[1, 3]
// console.log('variable: ', variable)

let mixed:any[] = []
mixed.push(5)
mixed.push('abc')
mixed.push(true)
mixed.push({a: '1', b: '2'})
// console.log('mixed: ', mixed)

//* Union
let pid: string | number
pid = '22'

//* Array
let countries = ['Vietnam', 'Laos', 'Cambodia']
countries.push('U.S')
// countries.push(10)
// countries.push(false)

//* Objects
let person = {
  name: 'Thanh',
  age: 23,
  isStudent: false,
}

//person.name = 5
person.name = 'Thanh dep trai'
//person.age = 'Thanh
person.age = 23

// person.hobbies = 30

//* Objects
person = {
  name: 'Cuong',
  age: 25,
  isStudent: false,
  // skills: ['js']
}