//1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function counting(){
  for(let i=1;i<=255;i++){
    console.log(i);
  }
}
counting();

// 2. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function summation(){
  let sum=0;
  for(let i=1;i<=1000;i++){
    sum = i+sum;
  }
  return sum;
}
console.log(summation());

// 3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function summationOdd(){
  let oddSum = 0
  for(let i=1;i<5000;i+=2){
    oddSum = i+oddSum;
  }
  return oddSum;
}
console.log(summationOdd());

// 4. Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function summationArr(arr){
  let arrSum = 0
  arr.forEach(val => arrSum=val+arrSum);
  return arrSum
}
console.log(summationArr([-5,2,5,12]));

// 5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7).

function maxVal(arr){
  let isMax=0;
  arr.forEach(val => isMax < val ? isMax=val : isMax);
  return isMax;
}
console.log(maxVal([-3,3,5,7]));

// 6. Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function arrAvg(arr){
  let sum=0;
  arr.forEach(val => sum=val+sum);
  return isAvg = sum/arr.length;
}
console.log(arrAvg([1,3,5,7,20]));

// 7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function odds(){
  oddArr=[];
  for(let i=1;i<50;i+=2){
    oddArr.push(i);
  }
  return oddArr;
}
console.log(odds());

// 8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function howManyGreater(arr, y){
  let count=0;
  arr.forEach(val => val>y?count++:y);
  return count;
}
console.log(howManyGreater([1, 3, 5, 7], 3));

// 9. Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4]).

function arrSqr(arr){
  arr.forEach(val => arr[arr.indexOf(val)]=val*val);
  return arr;
}
console.log(arrSqr([1,5,10,-2]));

// 10. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0]).

function noNeg(arr){
  arr.forEach(val => val<0?arr[arr.indexOf(val)]=0:arr);
  return arr;
}
console.log(noNeg([1,5,10,-2]));

// 11. Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5]).

function maxMinAvg(arr){
  let check = 0;
  let sum = 0;
  let newArr=[];
  arr.forEach(val => val>check?check=val:check);
  newArr.push(check);
  arr.forEach(val => val<check?check=val:check);
  newArr.push(check);
  arr.forEach(val => sum=val+sum);
  newArr.push(sum/arr.length);
  return newArr;
}
console.log(maxMinAvg([1,5,10,-2]));

// 12. Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr){

  // The Boring Way:

  // let newLast = arr[0];
  // let newFirst = arr[arr.length-1];
  // arr[0]=newFirst;
  // arr[arr.length-1]=newLast;
  // return arr;

  // The More Interesting Way: 

  let newLast = arr.shift();
  let newFirst = arr.pop();
  arr.unshift(newFirst)
  arr.push(newLast);
  return arr;
}
console.log(swap([1,5,10,-2]));

//13. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function negToString(arr, str){
  arr.forEach(val => val<0?arr[arr.indexOf(val)]=str:arr);
  return arr;
}
console.log(negToString([-1,-3,2], 'Dojo'));