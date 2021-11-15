export {}

/* TYPE ALIAS */
type StringOrNumber = string | number
type Student = {name:string; id:StringOrNumber} 
//! Notice: This is not object, dont use comma ',' must use ';'

type Student2 = {
  name:string
  id:StringOrNumber
} 

const studentDetails = (id:StringOrNumber, studentName:string):void => {
  console.log(`Student ${studentName} has id: ${id}`)
}