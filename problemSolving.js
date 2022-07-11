//Check  string is palindrome.
function palindrom(str) {
    var len = str.length;
    var mid = Math.floor(len / 2)
    console.log(mid)

    for (var i = 0; i < mid; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false
        }
    }
    return true

}
console.log(palindrom("racecar"))


//Reverse string
function reverseStr(str) {
    let reversedStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }
    return reversedStr;
}
console.log(reverseStr("arun"))



//Find max value
let arrayList = [1, 2, 3, 4, 3, 21, 0]
let max = arrayList[0]

for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] > max) {
        max = arrayList[i]
    }
}
console.log("max value - ", max);


//Find min value
let arrayListTwo = [1, 2, 3, 4, 3, 21, 0, -5]
let min = arrayListTwo[0]

for (let i = 0; i < arrayListTwo.length; i++) {
    if (arrayListTwo[i] < min) {
        min = arrayListTwo[i]
    }
}
console.log("min value - ", min) 


//Find duplicate in array
var arr= [1,3,1,5,7,3,1];
var arr2=[]
for(let i=0;i<arr.length;i++){
for(let j=i+1;j<arr.length;j++){
if(arr[i]===arr[j]){
arr2.push(arr[i])

}
}

}
uniq = [...new Set(arr2)];

console.log(uniq)





//Find common value in array
var ar1= [1, 5, 10, 20, 40, 80]
var ar2 = [6, 7, 20, 80, 100]
var ar3 = [3, 4, 15, 20, 30, 70, 80, 120]
var last =[]
var final=[]
for(let i=0;i<ar1.length;i++){
  if(ar2.includes(ar1[i])){
  final.push(ar1[i])
  }
}
for(let k=0;k<ar3.length;k++){
 if(last.includes(ar3[k])){
   final.push(ar3[k])
 }
console.log(final);



//Sort an Array using the Quicksort
function quickSort(originalArr) {
if (originalArr.length <= 1) {
   return originalArr;
   } else {
         var leftArr = [];              
         var rightArr = [];
         var newArr = [];
         var pivot = originalArr.pop();      
         var length = originalArr.length;
         for (var i = 0; i < length; i++) {
            if (originalArr[i] <= pivot) {    
               leftArr.push(originalArr[i]);      
         } else {
                 rightArr.push(originalArr[i]);
       }
     }
   return newArr.concat(quickSort(leftArr), pivot, quickSort(rightArr)); 
}
}
var myArray = [9, 0, 2, 7, -2, 6, 1 ];
console.log("Original array: " + myArray);
var sortedArray = quickSort(myArray);
console.log("Sorted array: " + sortedArray);



// The maximum difference between any two elements such that larger element appears after the smaller number. 
function maxDiff( arr)
{     
  let diff ;
  for (let i = 0; i < arr.length; i++){
    for (let j = i+1; j < arr.length; j++){
      if (arr[j] < arr[i]) 
        diff = arr[i];
    } 
  }         
  return diff;
} 
console.log( maxDiff( [2, 3, 10, 6, 4, 1, 100,147,1,90,8]));
    
   
//Check if the given two sets are disjoint or not
  function aredisjoint(arr1,arr2)
    {
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++){
                if (arr1[i] == arr2[j])
                    return false;
            }
        }
        return true;
    }
       
    result = aredisjoint([12, 34, 11, 9, 3], [7, 2, 1, 5]);
    if (result)
       console.log("Yes");
    else
        console.log("No");

    
    //sum of digits in all numbers from 1 to n 
      function sumOfDigit(n)
    {
        let result = 0;
        for (let x = 1; x <= n; x++)
            result += sumOfDigits(x);
        return result;
    }
      
    function sumOfDigits(x)
    {
        let sum = 0;
        while (x != 0)
        {
            sum += x % 10;
            x = parseInt(x / 10, 10);
        }
        return sum;
    }
    console.log(sumOfDigit(5));
