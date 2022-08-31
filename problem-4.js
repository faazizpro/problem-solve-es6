/*
                                    Practice Problem 4  
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.
*/



const arrayFunction = (array1, array2) =>{
    console.log(array1, array2);
    const newArray = [...array1, ...array2];
    console.log(newArray);
    const largestNumber = Math.max(...newArray);
    return largestNumber;
}

const array1 = [10, 4, 32];
const array2 = [21, 31, 45];

const results = arrayFunction(array1, array2);
console.log(results);