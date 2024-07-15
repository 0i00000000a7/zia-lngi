var t = 2000;
if (localStorage.zia_lngi) t = Number(localStorage.zia_lngi)
var final = "寄,寄,2,,1,,3";

var bits = [
  [[""],[""]],
  [["寄+"],[""]],
  [["寄<sup>2</sup>+"],[""]],
  [["寄<sup>3</sup>+"],[""]],
  [["寄<sup>"],["</sup>"]],
  [["寄^^("],[")"]],
  [["寄^^^("],[")"]],
  [["寄{"],["}寄"]],
  [["寄{{1}}("],[")"]],
  [["寄{{"],["}}寄"]],
  [["寄,寄,1,("],[")"]],
  [["寄,("],["),1,1,2"]],
  [["寄,寄,("],["),1,2"]],
  [["寄,寄,1,("],["),2"]],
  [["寄,寄,1,1,("],[")"]],
  [["寄,("],["),,1,,2"]],
  [["寄,寄,("],["),,1,,2"]],
  [["寄,寄,("],["),2,,1,,2"]],
  [["寄,寄,1,("],["),,1,,2"]],
  [["寄,("],["),,1,,3"]],
];

var limits = [
  0,
  2000,
  5000,
  10000,
  15000,
  35000,
  50000,
  60000,
  80000,
  120000,
  150000,
  175000,
  200000,
  230000,
  250000,
  275000,
  300000,
  310000,
  320000,
  330000,
  350000,
];

var offsets = [
  0,
  0,
  0,
  0,
  1600,
  2000,
  2000,
  1600,
  2000,
  1333.3334,
  1500,
  2000,
  1333.3334,
  1333.3334,
  1500,
  1666.6667,
  1333.3334,
  1000,
  1500,
  1600,
];

function findLimit(n){
  var i = 0;
  while(limits[i] <= n){
    i++;
  }
  return i-1;
}

function LRemainder(n){
  var i = 0;
  while(limits[i] <= n){
    i++;
  }
  return ((n-limits[i-1])/(limits[i]-limits[i-1]))*(limits[i]-offsets[i-1])+offsets[i-1];
}

function parse(n){
  if(findLimit(n) == 0){
    return Math.floor(1/(1-(n/2000)))-1;
  } else if(n < limits[limits.length-1]) {
    return bits[findLimit(n)][0] + parse(LRemainder(n)) + bits[findLimit(n)][1];
  } else {
    return final;
  }
}

setInterval(function(){
  if (t < (limits[limits.length - 1])) t++;
  t+=9
  localStorage.zia_lngi = t
  document.getElementById("num").innerHTML = parse(t);
},10);

function setTime(x) {
  t = x
}