let bubbleSort = (arr) =>{
    if(arr.length<= 1) return arr;
    for(let i = 0; i< arr.length; ++i){
        for(let j= i+1; j<arr.length; ++j){
            if(arr[i]>arr[j]) [arr[i],arr[j]] = [arr[j], arr[i]];
        }
    }
    return arr;
}