// Find the Occurence of Each Element 

const arr = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]

const freq = arr.reduce((acc,n)=>{
    acc[n] = (acc[n] || 0) + 1
    return acc
},{}) // empty object

console.log(freq);
