function telephoneCheck(str) {
  if(str[0]==="-"){
    return false;
  }
  if(str.indexOf(" ")==2){
    return false;
  }

  if(str.indexOf("(")==-1 && str.indexOf(")")>=0 ){
    return false;
  }
  if(str.indexOf("(")>=0){
        if (str[str.indexOf("(")+4]!=")"){
        return false;
        }
    }

 let phoneNum=str.replace(/-|\s|\(|\)/g, ""); //remove all the spaces and hyphens 
 //console.log(phoneNum)
  if (phoneNum.length===10){
    return true;
  }
  else if(phoneNum[0]=="1" && phoneNum.length===11){ //area code should be 1
    return true;
  }
  return false;
}


let r=telephoneCheck("55 55-55-555-5");
console.log(r)
console.clear();
