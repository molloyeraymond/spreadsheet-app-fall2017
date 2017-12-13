let len = text => text.length;
let concatenate = (text1,text2) => text1 + text2;
let left = (text,numChars) => text.substring(0, numChars);
let right = (text,numChars) => text.substring(text.length - numChars, text.length);
let find = (findText, withinText, startNum) => withinText.indexOf(findText, startNum);
let search = (findText, withinText, startNum) => (withinText.toLowerCase()).indexOf(findText.toLowerCase(),startNum)+1;
let mid = (text, startNum, numChars) => text.substring(startNum - 1, startNum + numChars - 1 );
let replace = (oldText,startNum,numChars,newText) => oldText.substring(0, startNum) + newText.substring(0, numChars) + oldText.substring(startNum + numChars);

let beforeSubstring = (s, sub) => s.substring(0, s.indexOf(sub));
let getFunctionName = input => beforeSubstring(input,"(")

let afterSubstring = (s, sub) => s.substring(s.indexOf(sub)+sub.length, s.length)
let removeArgs = (num,args)=>{
let removeFirstArg=list=>afterSubstring(list,",");
  if (num===0) return args;
  else return removeFirstArg(removeArgs(num-1,args));
}

let removeFirstChars = (s, numChars) => s.substring(s.length,numChars);
let removeLastChars = (s, numChars) => s.substring(0, s.length - numChars);
let removeFirstAndLastChars = (s, numChars) => (removeLastChars(removeFirstChars(s, numChars), numChars));
let removeEnds = s => removeFirstAndLastChars(s,1);
