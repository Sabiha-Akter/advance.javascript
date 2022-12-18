let number = [2, 3, 4, 5, 6, 7, 8];
 let output = [];
for(var i = 0; i < number.length; i++){
    let element = number[i];
    result = element * element;
    output.push(result);
}
console.log(output);

  function squar(element){
      return element * element;
  }
//  const squar = element => element * element;
//  const squar2 = x => x * x;

//  const result2 = number.map(function(element){
//      return element * element;
//  })
const result2 = number.map(x => x * x);
console.log(result2);

const biggest = number.filter(x => x > 5);
console.log(biggest);

const finde = number.find(x => x < 5);
console.log(finde);