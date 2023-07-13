/*
// create array in ascending order with the help of sort() method
const a = [40, 100, 1, 5, 25, 10];
a.sort(function(a, b){
    return a-b
});
console.log(a)

// create array in ascending order with the help of sort() method
const b = [40, 100, 1, 5, 25, 10];
b.sort(function(x, y){
    return y-x
});
console.log(b)
*/
//create array in ascending order with the help of bubble sort method 

const array = [8,4,9,7,2,6,1,5,3]

const Bsort = (array) =>{
    for(i=0;i<array.length;i++){
        for(j=0;j<array.length;j++){
            if(array[j] > array[j+1]){
                let swap = array[j];
                array[j] = array[j+1];
                array[j+1] = swap;
            }
        }
    }
console.log(array)
}
Bsort(array);

//create array in descending order with the help of bubble sort method 

const arr = [8,4,9,7,2,6,1,5,3]

const sort = (arr) =>{
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            if(arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
console.log(arr)
}
sort(arr);