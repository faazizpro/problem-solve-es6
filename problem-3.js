/*
                                    Practice Problem 3  
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.
*/


const calculateNum =  (a , b) =>{
    const firstSquare = a * 2;
    const secondSquare = b* 2;
    const averageSum = firstSquare + secondSquare;
    return averageSum;
}

const numDecl = calculateNum(10, 20);
console.log(numDecl);