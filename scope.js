let bonus = 30;

function sum(first, second){
    const sum = first + second +bonus;
    console.log(sum);
    console.log(bonus);
    if(sum > 10){
        const mood = "happy";
        var day = 'willbe';
        console.log(mood);
    }
    console.log(day);
    return sum
}

const result = sum(32,22);
console.log(result);