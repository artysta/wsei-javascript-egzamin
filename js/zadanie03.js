function bigestSumOfTwoElements(array){
    if (array.length < 1) return false;
    if(array.length == 1) return array[0];
    var num1 = Math.max.apply(null, array);
    array.splice(array.indexOf(num1), 1);
    var num2 = Math.max.apply(null, array);
    return num1 + num2;
}

console.log(bigestSumOfTwoElements([1,2,3,4])) // => 7
console.log(bigestSumOfTwoElements([])) // => false
console.log(bigestSumOfTwoElements([76])) // => 76
console.log(bigestSumOfTwoElements([23,45,17,12])) // => 68
