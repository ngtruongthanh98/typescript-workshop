export {};
import './Example/basicTypes'
import './Example/typeAlias'
import './Example/functions'

//**********/
type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'Dai',
}

//* Tuple
let info: [number, string, boolean] = [1, 'Thanh Nguyen', true]
//* Tuple Array
let employees: [number, string][]

employees = [
  [1, 'Thanh'],
  [2, 'Hao'],
  [3, 'Tung'],
]

//* Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

// console.log(Direction1.Down)

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}


//* Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

//* Interfaces
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// console.log(add(10, 5))

interface PersonInterface {
  id: number
  name: string
  register(): string
}

//* Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const thanh = new Person(1, 'Thanh Nguyen')
const dai = new Person(2, 'Dai Tran')

//* Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 'Developer')

//* Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['Vietnam', 'Laos', 'Cambodia'])

// strArray.push(1) // Throws error



