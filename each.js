const foreach = function each(arr){
    for(let i = 0; i < arr.length; i++){
        cb(arr[i], i);
    }
}

function cb(value, index){
    console.log({index, value});
}

let list = [1,2,3,4,5];

export { foreach }