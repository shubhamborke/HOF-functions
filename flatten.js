let arr = [];
const problem4 = function flatten(elements){
    for(let i = 0; i < elements.length; i++){
        if(Array.isArray(elements[i])){
            arr.concat(flatten(elements[i]));
        }else{
            arr.push(elements[i]);
        }
    }
    return arr;
}

export { problem4 }