function palindrom(str){
    var len =str.length;
    var mid =Math.floor(len/2)
    console.log(mid)
    
    for(var i=0 ;i<mid;i++){
    if(str[i] !==str[len-1-i]){
    
    return false
    }
    }
    return true
    
    }
    console.log(palindrom("racecar"))