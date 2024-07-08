function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

function sortArray(numArray){
  let sortedArray = [];

  counter = numArray.length;

  for (let i = 0; i < counter; i++){
    if (numArray.length > 1){
      let minValue = findMinValue(numArray);
      sortedArray.push(minValue);
      numArray.splice(numArray.indexOf(minValue), 1);    
    }else{
      sortedArray.push(numArray[0]);
      numArray.splice(0, 1);
    }
  }

  return sortedArray;
}

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

// console.log(sortArray(nums1));

function sortArray2(numArray){
  let minValue;

  if (numArray.length === 1){
    minValue = numArray[0];
    numArray.splice(numArray.indexOf(minValue), 1); // remove item at current index
    return numArray.push(minValue)
  }
  else {
    minValue = findMinValue(numArray); // find minimum value
    numArray.splice(numArray.indexOf(minValue), 1); // remove item at current index
    numArray.push(minValue); // add item to end of list

    return sortArray2(numArray.splice(0, numArray.length - 1)); // repeat function for items before added item 
  }
}

console.log(sortArray2(nums1));
