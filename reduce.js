const problem6 = function filter(elements , cb , startingValue){
    let sum = 0;
    if(startingValue === undefined){
        sum = elements[0];
        for(let i = 1; i < elements.length; i++){
            sum = cb(sum , elements[i]);
        }
    }else{
        sum = startingValue;
        for(let i = 0; i < elements.length; i++){
            sum = cb(sum , elements[i]);
        }
        }
    console.log(sum);
}

export { problem6 }
