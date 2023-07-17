function totalCash(cid) {
  let cashSum = 0;

  for (let i = 0; i < cid.length; i++) {
    cashSum += cid[i][1];
  }

  return cashSum.toFixed(2);
}

function getChange(curr, cid, change) {
  const changeArray = [];
  let i = cid.length-1;
  while(i >= 0 && change > 0){
    let changeCount = cid[i][1];
    let count=0;
    while (changeCount > 0 && change >= curr[cid[i][0]] ){
      change -= curr[cid[i][0]];
      count += 1;
      changeCount -= 1;
    }
    if (count > 0) {
      changeArray.push([cid[i][0],count]);
    }
    i--;
  }
    
  return {changeArray,change};       
}
  
let Currency = { 
  'PKR':
{
  '1 RUPEE': 1,
  '2 RUPEE': 2,
  'FIVE' : 5,
  'TEN': 10,
  'TWENTY': 20,
  'FIFTY': 50,
  'ONE HUNDRED': 100,
  'FIVE HUNDRED': 500,
  'THOUSAND': 1000,
  'FIVE THOUSAND': 5000   
}
}

function checkCashRegister(price, cash,cidCurrency, cid) {
  let change = Math.abs(price-cash);
  let cashSum = totalCash(cid);
  let curr = {};
  
  if (cidCurrency == "USD") {
     curr=Currency.USD;
   } else { 
     curr=Currency.PKR;
     change=Math.floor(change);
   } 
  if (change > cashSum) {
    return { status: 'INSUFFICIENT_FUNDS', change:[] }
  } else if (change.toFixed(2) === cashSum) {
    return { status: 'CLOSED', change:cid };
  }

  let changeInfo = getChange(curr, cid, change);
  
  if (changeInfo.change > 0){
    return { status: 'INSUFFICIENT_FUNDS', change:[] };
  }

  return { status: 'OPEN', change:changeInfo.changeArray };
}
  
  

let result2 = checkCashRegister(100, 16, "PKR",[["1 RUPEE", 1], ["2 RUPEE", 4], ["FIVE",10], ["TEN", 80],["FIFTY",2],["ONE HUNDRED", 55], 
["FIVE HUNDRED", 20], ["THOUSAND", 60], ["FIVE THOUSAND", 100]]);
console.log(result2);
