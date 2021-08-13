const problem3 = function findval(elements,find){
    let arr = [];
    for(let i = 0 ; i < elements.length; i++){
        cb(elements[i], find);
    }
    function cb(element , value){
        if(element === value){
            arr.push(value);
        }
    }
    console.log(arr);
}

export { problem3 }