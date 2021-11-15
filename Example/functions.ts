export {}

//* Functions
function addNum(x: number, y: number): number {
  return x + y
}

const square = (side:number) => side * side;
// console.log(square(3))

//* Function with default value
const addOptionalValue = (a:number, b:number, c?:number | string) => {
  console.log('sum = ', a + b)
  console.log('c = ', c)
}
// addOptionalValue(1, 3)

//* Function with default value
const addDefault = (a:number, b:number, c:number | string = 10) => {
  console.log('sum = ', a + b)
  console.log('c = ', c)
}

// addDefault(1, 3)

//* Void
function log(message: string | number): void {
  console.log(message)
}

/* FUNCTION SIGNATURE  */
let greet: (a:string, b:string) => void

greet = (name:string, greeting:string) => {
  console.log(`${name} says ${greeting}`)
}
// greet('Thanh', 'hello anh em')

 

let calculate: (a:number, b:number, isAdd:boolean) => number

calculate = (num1:number, num2:number, isAdd:boolean) => (
  isAdd ? (num1 + num2) : (num1 - num2)
)
// console.log(calculate(10, 5, true))
