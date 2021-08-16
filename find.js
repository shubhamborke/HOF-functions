const problem3 = function findval(elements,cb){
    for(let i = 0 ; i < elements.length; i++){
        if(cb(elements[i]) === true){
            return elements[i];
        }
    }
}

export { problem3 }