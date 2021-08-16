const problem2 = function filter(ar, cb){
    let arr = [];
    for(let i = 0 ; i < ar.length; i++){
       if(cb(ar[i] , i) === true){
            arr.push(ar[i]);
       }
    }
    console.log(arr);
}

export { problem2 }