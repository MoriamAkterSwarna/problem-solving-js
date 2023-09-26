function getOddSum(numbers){
    const oddNumbers =[];
    for(let i = 0; i< numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element)
        }
    }
    return oddNumbers;
}
const myNumbers = [12, 65, 45, 78, 92, 45, 91];
const oddNumbers = getOddSum(myNumbers);
console.log(oddNumbers);