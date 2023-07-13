function rot13(str) {
    let result=""
    
    for (let i=0; i<str.length; i++){
      if(str[i].match(/[A-Z]/)){
        let num=str.charCodeAt(i);
        if(num-13<65){
          num=90-((13-(num-65)-1));
        }
        else num-=13;
        let c=String.fromCharCode(num);
        //console.log(c)
        result+=c;
      }
      else {
        result+=str[i];
      }
  
    }
    //console.log(result)
    return result;
  }
  
  rot13("SERR CVMMN!C");
