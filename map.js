const problem5 = function map(elements, cb){
    let arr = [];
    for(let i = 0; i < elements.length; i++){
        arr.push(cb(elements[i]));
    }
    return arr;
}

export { problem5 }