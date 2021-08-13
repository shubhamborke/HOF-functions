const problem2 = function filter(ar, cb){
    for(let i = 0 ; i < ar.length; i++){
        if(typeof(ar[i]) === 'number'){
            cb(ar[i] , i);
        }
    }
}

export { problem2 }