/*
                                   Practice Problem 2  
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result.
*/

const makeArray = (friends) => {
    console.log(friends);
    // console.log(friends[0].length);
    const newArray = [];
    for( const friend of friends){
        // console.log(friend.length);
        if(friend.length % 2 === 0){
            newArray.push(friend);    
        }
    }
    console.log(newArray);
}
const friendsName = makeArray(['Rahim', 'Asif', 'Karim', 'Sami', 'Abir', 'Yusuf'])