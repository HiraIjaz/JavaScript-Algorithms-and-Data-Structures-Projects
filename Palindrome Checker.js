function palindrome(str) {
    str=str.replace(/\s|\W|_/g,"") //removed all the punctuations
    str=str.toLowerCase() //converted string to lowercase
    let rstr=str.split("").reverse().join(""); //reversed string
    return str===rstr; //compared orignal string with reversed string
  }
  
  console.log(palindrome("A man, a plan, a canal. Panama"));
