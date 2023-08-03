
const p1 = new Promise ((resolve,reject) =>{

  setTimeout( () => {
 
    resolve(56)
 
 }, 8000)
}) 

const p2 = new Promise( (resolve,reject)  => {

  setTimeout( () =>{

      resolve("promise 2") } , 4000 )    
  })

async function Pro (){

const pro1 = await p1;
console.log(pro1);

const pro2 = await p2;
console.log(pro2)

}

let a = Pro();
console.log(a);
