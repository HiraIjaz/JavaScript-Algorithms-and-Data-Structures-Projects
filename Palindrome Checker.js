function palindrome(str) {
  let orignalStr = str.replace(/\s|\W|_/g, "") //removed all the punctuations
  
  orignalStr = orignalStr.toLowerCase() //converted string to lowercase
  
  const reversedStr = orignalStr.split("").reverse().join(""); //reversed string
  
  return orignalStr === reversedStr; //compared orignal string with reversed string
}
  
console.log(palindrome("A man, a plan, a canal. Panama"));
