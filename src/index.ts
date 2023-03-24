
// let set : any = 565768574564
//     set = 'fewgegnr'
//     set = true

let array : number[] = [32,134,413,143,143,413]
let string : string[] = ['wqre','fewgrq']
let any : any [] = [3546321,'dfsgfh']

let str : readonly string[] = ['feqw','fegeg']

string[5]='rwgbe'

let direction : [number,string,boolean] = [2431,'asdfgsf',true]
let direction1 : [boolean,string,boolean] = [false,'asdfgsf',true]

// console.log(direction1);



let obj : {id : number, name : string, istrue : boolean} = {
    id : 1,
    name : 'hari',
    istrue : false
}

obj.istrue = true

console.log(obj);


let car : {model : number , isPetrol ?: boolean} = {model : 2016}

car.isPetrol = true

console.log(car);

enum CardinalDirection  {
    North = 100,
    South,
    East,
    West
}

console.log(CardinalDirection.North);
console.log(CardinalDirection.West);

let direction3 = CardinalDirection.South




type car = {
    model : number,
    year : number
}


let car1 : car = {
    model : 2000,
    year : 2014
}
let car2 : car = {
    model : 3000,
    year : 2012
}

console.log(car1);




type Sample = [model : number,
    year : number,
    name: string]
    

let jay : Sample = [2012,2012,'benz']

console.log(jay);


interface Sample1 { name : string , year ?: number}

let jay1 : Sample1 = {name : 'hari' }

jay1.year = 35212

console.log(jay1);



function nameServer (incoming : string | number){
    console.log(typeof(incoming));
}



type addition = {
    add : () => void
}
type substraction = {
    sub : () => void
}

let process : addition & substraction 

let doSome : {
    add : () => {},
    sub : () => {}
}

type Quantity = 50 | 100

let some : Quantity = 100


function Name (name : string | null | undefined | number){
    if(name === '')
    console.log(name.toUpperCase)
    else
    console.log('fdgfg'); 
}
Name('eqfwgreth')