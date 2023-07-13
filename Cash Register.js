function totalCash(cid) {
  let cashSum = 0;

  for (let i = 0; i < cid.length; i++) {
    cashSum += cid[i][1];
  }

  return cashSum.toFixed(2);
}

function getChange(curr, cid, change) {
  cid = cid.reverse();
  const changeArray = [];

    for (let elem of cid) {
      let temp = [elem[0], 0];
      while (change >= curr[elem[0]] && elem[1] > 0) {
        temp[1] += curr[elem[0]];
        elem[1] -= curr[elem[0]];
        change -= curr[elem[0]];
        change = change.toFixed(2);
      }
      if (temp[1] > 0) {
        changeArray.push(temp);
      }
    }
    
  return {changeArray,change};       
}
  
let Currency = { 
  'USD':
  { 'PENNY': .01,
    'NICKEL': .05,
    'DIME': .10,
    'QUARTER': .25,
    'ONE': 1.00,
    'FIVE': 5.00,
    'TEN': 10.00,
    'TWENTY': 20.00,
    'ONE HUNDRED': 100.00
  } ,
  'PKR':
{
  '1 RUPEE': 1,
  '2 RUPEE':2,
  'FIVE' : 5,
  'TEN':10,
  'TWENTY': 20,
  'FIFTY':50,
  'ONE HUNDRED': 100,
  'FIVE HUNDRED':500,
  'THOUSAND':1000,
  'FIVE THOUSAND':5000   
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
  
  
let result1 = checkCashRegister(19.5, 20,'USD' [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(result1);
let result2 = checkCashRegister(100, 16, "PKR",[["1 RUPEE", 1], ["2 RUPEE", 4], ["FIVE",10], ["TEN", 80], ["ONE HUNDRED", 55], ["5 HUNDRED", 20], ["THOUSAND", 60], ["FIVE THOUSAND", 100]]);
console.log(result2);
