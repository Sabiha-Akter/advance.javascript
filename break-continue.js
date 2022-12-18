const numbers = [2, 3, 4, 5, 6, 11, 12, 7, 8, 9, 10];
for (var i = 0; i <numbers.length; i++){
    // const element = numbers[i];
    
    if(numbers[i] > 11){
        break;
    }
    console.log(numbers[i]);
}

const number = [2, 3, 4, 5, 6, 11, 12, 7, 8, 9, 10];
for (var i = 0; i <number.length; i++){
    const element2 = number[i];
    
    if(element2 < 8){
        continue;
    }
    console.log(element2);
}

