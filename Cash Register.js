function totalCash(cid){ //calculates total cash in Cash register
    let sum=0;
    for (let i=0;i<cid.length;i++){
      sum+=cid[i][1];
    }
    return sum.toFixed(2);
  }

  function getChange(Curr,cid,change) { //calcultes the change to return
    cid = cid.reverse();
    const changeArray = [];
      for (let elem of cid) {
        let temp = [elem[0], 0];
        while (change >= Curr[elem[0]] && elem[1] > 0) {
          temp[1] += Curr[elem[0]];
          elem[1] -= Curr[elem[0]];
          change -= Curr[elem[0]];
          change = change.toFixed(2);
        }
        if (temp[1] > 0) {
          changeArray.push(temp);
        }
      }
      console.log(changeArray);
  return {changeArray,change};
         
  }
  
  let Curr = {
      "PENNY": .01,
      "NICKEL": .05,
      "DIME": .10,
      "QUARTER": .25,
      "ONE": 1.00,
      "FIVE": 5.00,
      "TEN": 10.00,
      "TWENTY": 20.00,
      "ONE HUNDRED": 100.00
  }
  function checkCashRegister(price, cash, cid) {
    let change=Math.abs(price-cash);
    let sum=totalCash(cid);
    
    //console.log(sum,change)
    if(change>sum){
      return {status: "INSUFFICIENT_FUNDS", change:[]}
    }
    else if (change.toFixed(2)===sum){
      return {status: "CLOSED", change:cid};
    }
    let changeInfo=getChange(Curr,cid,change);
    
    if(changeInfo.change >0){
      return {status: "INSUFFICIENT_FUNDS", change:[]};
    }
    return {status: "OPEN", change:changeInfo.changeArray };
  }
  
  let r=checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  console.log(r)
