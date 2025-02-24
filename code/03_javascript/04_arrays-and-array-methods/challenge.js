const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function sliceOpr(slicStart, sliceEnd){

let slicedArr = arr.slice(slicStart, sliceEnd)
    for(i = sliceEnd; i <= arr.length; i++){
        cl(arr[i])
    }
    
}

sliceOpr(0, 4)