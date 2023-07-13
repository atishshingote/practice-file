let p1 = new Promise ((resolve,reject) =>{

    setTimeout(() => {
    console.log("resolved after 3 seconds")
    resolve(56)
   }, 3000)
 })

 p1.then ((value) =>{
    console.log(value)
    let p2 = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve("promise 2")},4000)    
    })
    return p2
 }).then((value) => {
    console.log("we are  done")
 }).then((value) => {
   console.log("we are doneeee")
 })