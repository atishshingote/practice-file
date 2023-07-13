//array methods
//.map()
let arr = [45,78,96]

let a = arr.map((value,index)=>{
    console.log(value,index)
    return value + index
})
console.log(a)

// .filter()
let arr2 = [27,82,2,7,28,5,8]
let a2 = arr2.filter((a)=>{
    return a<10
})
console.log(a2)

//.reduce
let arr3 = [2,5,8,4,9,1]

const arrfunc = (f1,f2)=>{
   return f1+f2
}
newarr3 = arr3.reduce(arrfunc)
console.log(newarr3)