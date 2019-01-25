// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, punctuation, numberOfTimes) {

    // Each time the for loop executes, you're going to add one more word to this string
    let finalPunctuation = "";
    for(let i=0;i<numberOfTimes;i++){
        finalPunctuation = finalPunctuation + punctuation;
    }

    let buildMeUp = ""


    for (let i = 0; i < theWordArray.length; i++) {
     if((i+1)%3 === 0 && i != 0){
        buildMeUp = `${buildMeUp} ${theWordArray[i]} ${finalPunctuation}` 
      } else {
        buildMeUp = buildMeUp + " " + theWordArray[i]
  
      }
        // Concatenate the new word onto buildMeUp
      console.log(buildMeUp)
        // Print buildMeUp to the console
    }

} 

// Invoke the function and pass in the array
addExcitement(sentence, "*", 5)