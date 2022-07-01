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
let arr=[4,1,2,3,4,1,2,1]
let arr1=[]
for(let i=0;i<arr.length;i++){
   if(arr1.indexOf(arr[i])===-1){
     arr1.push(arr[i])
   }
  
}
console.log(arr1)





//Find common value in array
function commonValue(ar1, ar2, ar3, n1, n2, n3)
{
  var i = 0,
    j = 0,
    k = 0;

  while (i < n1 && j < n2 && k < n3)
  {
    if (ar1[i] == ar2[j] && ar2[j] == ar3[k])
    {
    console.log(ar1[i] + " ")
      i++;
      j++;
      k++;
    }
    else if (ar1[i] < ar2[j]) i++;
    else if (ar2[j] < ar3[k]) j++;
    else k++;
  }
}

var ar1 = [1, 5, 10, 20, 40, 80];
var ar2 = [6, 7, 20, 80, 100];
var ar3 = [3, 4, 15, 20, 30, 70, 80, 120];
var n1 = ar1.length;
var n2 = ar2.length;
var n3 = ar3.length;

console.log("Common Elements are ");
commonValue(ar1, ar2, ar3, n1, n2, n3); 



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


