// the purpose of this script is check whether or not the word inputed is a palindrome //
function isPalindrome(word) {
    let start = 0;
    let end = word.length - 1;
    word = word.toLowerCase();
 // while loop to run through the word both end of a word to check if they match// 
    while (start <= end) {
      if (word[start] !== word[end]) return `is not a palindrome :(`;
      start++;
      end--;
    }
  return `is a palindrome!!`;
  }

  let word = prompt("please enter a random word:");
//promote for user input//
  window.onload = writeMessage; 
  function writeMessage() {
    document.getElementById("demo").innerHTML = word + " " + answer;
  }
// print the answer on screen and within the html document//
  let answer = isPalindrome(word);
// call function and print answer.
  console.log(answer);