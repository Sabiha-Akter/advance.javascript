function add( num1, num2){
    console.log([...arguments]);
    return num1 + num2 + arguments[2] + arguments[3] + arguments[4];

}
const result = add(12, 32, 42, 52, 62);
console.log(result);

function sumNum(num1, num2){
    let sum = 0;
    for( var i = 0; i < arguments.length; i++){
        const num = arguments[i];
        sum = sum + num;
    }
    function loginfo(massege){
        console.log(massege);
    }
    loginfo("I like this work");
    return sum;
}
const result2 = sumNum(11, 22, 33, 44, 55, 66, 77);
console.log(result2);