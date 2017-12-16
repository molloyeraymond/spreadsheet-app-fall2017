/** 
Given a string as an input, returns the number of characters in the string
*@param {string} text string to get the length 
*@return{number}number of characters 
**/

let len = text => text.length;

/** 
Given two strings as an input,returns the concatenation of two texts
*@param {string} text string to combine the two texts
*@return{number}the concatenation of the two strings
**/

let concatenate = (text1,text2) => text1 + text2;

/** 
Given a string and a number as an input, returns the first number of characters in the text
*@param {string} text string 
*@return{number}the first number of characters of texts 
**/

let left = (text,numChars) => text.substring(0, numChars);

/** 
Given a string and a number as an input, returns the last number of characters in the text
*@param {string} text string 
*@return{number}the last number of characters of texts 
**/

let right = (text,numChars) => text.substring(text.length - numChars, text.length);

/** 
Given a string, a starting position number, and a string within the first string as an input, returns the position of the beginning of the first occurance of the findText
*@param {string} text string 
*@return{number}the position of the beginning of the first occurance of the findText within the text
**/

let find = (findText, withinText, startNum) => withinText.indexOf(findText, startNum);

/** 
Given a string, a starting position number, and a string within the first string as an input, returns the position of the beginning of the first occurance of the findText starting at the startNum of characters
*@param {string} text string 
*@return{number}the position of the beginning of the first occurance of the findText within the text at a given starting position
**/

let search = (findText, withinText, startNum) => (withinText.toLowerCase()).indexOf(findText.toLowerCase(),startNum)+1;

/** 
Given a string, a starting position, and a number as an input, returns the substring of characters of text, starting at position startNum, thats numChars long
*@param {string} text string 
*@return{number} the substring of characters of text, starting at position startNum, thats numChars long
**/

let mid = (text, startNum, numChars) => text.substring(startNum - 1, startNum + numChars - 1 );

/** 
Given a string, a starting position, a number, and a new string, returns the new string implemented into the original string at a certain position
*@param {string} text string 
*@return{number} the new string implemented into the original string at a certain position
**/

let replace = (oldText,startNum,numChars,newText) => oldText.substring(0, startNum) + newText.substring(0, numChars) + oldText.substring(startNum + numChars);

/** 
Given a string and a index of method, returns all the characters appearing before the first occurance of the index
*@param {string} text string 
*@return{number} the all the characters appearing before the first occurance of the index
**/


let beforeSubstring = (s, sub) => s.substring(0, s.indexOf(sub));

/** 
Given a string and a subtext, returns all the characters appearing before the "(" 
*@param {string} text string 
*@return{number} the all the characters appearing before the "("
**/

let getFunctionName = input => beforeSubstring(input,"(")

/** 
Given a string and a subtext, returns all the characters appearing after a certain indec 
*@param {string} text string 
*@return{number} the all the characters appearing after a certain index
**/

let afterSubstring = (s, sub) => s.substring(s.indexOf(sub)+sub.length, s.length)

/** 
Given a number and arguments, returns the list of arguments after a number of them had been removed from the front 
*@param {string} text string 
*@return{number} the list of arguments after a number of them had been removed from the front 
**/

let removeArgs = (num,args)=>{

/** 
Given a list of arguments, returns the list of arguments after the first argument has been removed from the front 
*@param {string} text string 
*@return{number} the list of arguments after a number of them had been removed from the front 
**/

let removeFirstArg = itemList =>afterSubstring(itemList,",");
  if (num===0) return args;
  else return removeFirstArg(removeArgs(num-1,args));
}

/** 
Given a string and a number, returns the string after the number of characters have been removed from the right
*@param {string} text string 
*@return{number} the string after the number of characters have been removed from the right
**/

let removeFirstChars = (s, numChars) => s.substring(s.length,numChars);

/** 
Given a string and a number, returns the string after the number of characters have been removed approaching from the left
*@param {string} text string 
*@return{number} the string after the number of characters have been removed from the left
**/

let removeLastChars = (s, numChars) => s.substring(0, s.length - numChars);

/** 
Given a string and a number, returns the string after the number of characters have been removed from the front and the back
*@param {string} text string 
*@return{number} the string after the number of characters have been removed from the front and the back
**/

let removeFirstAndLastChars = (s, numChars) => (removeLastChars(removeFirstChars(s, numChars), numChars));

/** 
Given a string and a number, returns the string after the number of characters have been removed
*@param {string} text string 
*@return{number} the string after the number of characters have been removed
**/

let removeEnds = s => removeFirstAndLastChars(s,1);
