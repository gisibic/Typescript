//array
const arr: Array<number> = [1, 2, 3, 4, 5]

const arr2: Array<string> = ["a", "b", "c", "d", "e"]

//Tuples
const Tuples: [string, number, number] = ["a",1,2]

//enum
enum ROLE {ADMIN, USER}

const role: ROLE = ROLE.ADMIN

enum STATUS_CODE {SUCSES = 200, CLIENT = 400, ERROR =500}
const code = STATUS_CODE.SUCSES

const ShowInfo = (name : string | number, age : number | string) =>{
    if(typeof name == "string"){
        console.log(name.toUpperCase)
    }

}
ShowInfo("abc","20")