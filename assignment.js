// ---------  Assignment Problem 1 ------


// In this problem we called a function named mindGame() where we take a positive number as an input the we multiply the number with three. Then we add 10 with the multiplication result and then divided the result by 2 and then subtract 5 from the result. Then we return the final result. We have validate that if the input is not a number it will show an error message. 

function mindGame(number) {

    // checks the parameter type is number or not
    if (typeof number !== 'number') {
        return "Please enter a valid number";
    }
    let temp = number * 3;
    temp = temp + 10;
    temp = temp / 2;
    temp = temp - 5;


    return temp;

}
const num = mindGame(33);
// console.log(num);

// ---------  Assignment Problem 2 ------


// We have validate that if the input is not a string it will show an error message. we called a function named evenOdd() where we take an input as string then check the string length if the length number has no remainder then it will return 'even' and if string has any remainder it will return 'odd' 


function evenOdd(str) {

    // checks the parameter type is string or not
    if (typeof str !== 'string') {
        return "Please enter a valid String";
    }

    for(let i=0; i<str.length; i++){
        if(str.length  % 2 == 0){
            return 'even';
        }
        else{
            return 'odd';
        }
    }



}
const string = evenOdd('chatgpt');
// console.log(string);

// ---------  Assignment Problem 3 ------

//  We have validate that if the input is not a number it will show an error message. we called a function named IsLGSeven() where we take a input as a number then check the number that it the difference between the number with seven is less than 7 or not. If the difference is less than seven than it will return the difference else it will return the result multiplcation with 2. 

function isLGSeven(number){
    // checks the parameter type is number or not
    if (typeof number !== 'number') {
        return "Please enter a valid number";
    }
    
    else if( (number - 7) < 7){
            return (number -7);
        }
        else{
            
            return 2 * number;
        }

}
const number = isLGSeven(15);
// console.log(number);

// ---------  Assignment Problem 4 ------

//  We have validate that if the input is not a array it will show an error message. we called a function named findingBaData() where we take an input an array then continue a for loop to check all the indexes of the array. If the index element is less than 0 then it will count the index number return the new array length. 

function findingBadData(numbers){
    array = Array.isArray(numbers)
    if (array  === false) {
        return 'Please enter an array';
    }
    else{
    const badData =[];
    for(let i = 0; i< numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element  < 0){
            badData.push(element)
        }
    }

    return badData.length
  }
}
const arr= findingBadData([ -4, -9, -5, -33, -55 ]);
// const arr= findingBaData(4);
// console.log(arr);

// ---------  Assignment Problem 5------

//  We have validate that if the input numbers are not number then it will show an error message. we called a function named gemsToDiamond() where we take theree numbers as input then take 3 values as gems power for each person and then we calculate the diamond by multiplying the gems and gems power. Then we check the total diamond is greater than the double of 1000 it will return the difference between total diamond  and 2000. Else it will return the total diamond 

function gemsToDiamond(fistFriendGems, secondFriendGems, thirdFriendGems) {

    // checks the parameter type is number or not

    if (typeof fistFriendGems !== 'number' || typeof secondFriendGems !==
        'number' || typeof thirdFriendGems !== 'number') {
        return 'Please enter a number';
    }

    const fistFriendGemsPower = 21;
    const secondFriendGemsPower = 32;
    const thirdFriendGemsPower = 43;

    const firstFriendDiamond = fistFriendGems * fistFriendGemsPower;
    const secondFriendDiamond = secondFriendGems * secondFriendGemsPower;
    const thirdFriendDiamond = thirdFriendGems * thirdFriendGemsPower;

    const totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    if(totalDiamond > 2 * 1000){
        return totalDiamond - 2000;
    }
    else{
        return totalDiamond;
    }

}

const total = gemsToDiamond(100, 5, 1);
// const total = gemsToDiamond(1, 1, 1);
// const total = gemsToDiamond(20, 200, 50);
// console.log(total);


