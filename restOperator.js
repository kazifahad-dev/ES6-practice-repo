function sumOfArray(...numbers){
    let total = 0;

    for(let i = 0; i < numbers.length; i ++){
        total = total + numbers[i]
    }
    return total
}


const sum = sumOfArray(23,43,54,54,564)
console.log(sum);


