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