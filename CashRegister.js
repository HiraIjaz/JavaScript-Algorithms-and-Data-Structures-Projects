function totalCash(cid) {
  let cashSum = 0;

  for (let i = 0; i < 8; i++) {
    cashSum += cid[i][1];
  }

  return cashSum.toFixed(2);
}

function getChange(curr, cid, change) {
  cid = cid.reverse();
  const changeArray = [];
  let i = 0;
  while(i>=0 || change===0){
    if(change>cid[i][1]){
      changeArray.push(cid[i][1]);
      change-=cid[i][1];
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
  'FIVE': 5,
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
  console.log(cid.length);
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
  
  

let result2 = checkCashRegister(100, 16, "PKR",[["1 RUPEE", 1], ["2 RUPEE", 4], ["FIVE",10], ["TEN", 80], ["ONE HUNDRED", 55], ["5 HUNDRED", 20], ["THOUSAND", 60], ["FIVE THOUSAND", 100]]);
console.log(result2);
