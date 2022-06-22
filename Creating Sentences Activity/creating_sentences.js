// TODO: Create an array variable called "words" with the following elements: 'This', 'is', 'JavaScript', 'Coding!'
let words = ["This","is","JavaScript","Coding!"]


// TODO: Create an empty string variable called "sentence".
var sentence = ""


// TODO: 
// 1. Create a function called "createSentence" that takes an array as an argument.
// 2. In the function use a for loop to iterate through each word element of the array.
// 3. Add each word to the "sentence" variable.
// 4. Return the "sentence".

function createSentence (yourArray)
{
    for(let i = 0; i < yourArray.length; i++)
    {

       sentence+= " " + yourArray[i]
        
    }
    return (sentence)
}


// TODO: Call the function "createSentence" using the console.log method.
console.log (createSentence (words))
