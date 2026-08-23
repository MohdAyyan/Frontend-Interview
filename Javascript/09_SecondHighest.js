const arr = [1,2,3,4,5,6,7,8,9,10]



function findSecondHighest(arr) {
   let first = -Infinity;
   let second = -Infinity;

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > first) {
         second = first;
         first = arr[i];
      } else if (arr[i] > second && arr[i] != first) {
         second = arr[i];
      }
   }
   return second
}

console.log(findSecondHighest(arr));

function findSecondHighest2(arr) {
   let max = arr[0];
   let secondMax = -Infinity;
   for (let i = 1; i < arr.length; i++) {
      if(arr[i] > max){
         secondMax = max;
         max = arr[i];
      } else if(arr[i] > secondMax && arr[i] != max){
         secondMax = arr[i];
      }
   }
   return secondMax;
}

console.log(findSecondHighest2(arr));




let max = -Infinity;
let secondMax = -Infinity;

for(let i = 0; i< arr.length; i++){
   if(arr[i] > max){
    secondMax = max;
    max = arr[i];
   }
   else if(arr[i] > secondMax && arr[i] != max){
    secondMax = arr[i];
   }
}

console.log(secondMax);

