var t = 2000;
var now = Date.now()
if (localStorage.zia_lngi) t = Number(localStorage.zia_lngi)
var final = "寄 #2世界";

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
  [["寄,寄,("],["),,1,,3"]],
  [["寄,3,,1,,("],[")"]],
  [["寄,寄,,1,,("],["),2"]],
  [["寄,寄,,1,,("],["),3"]],
  [["寄,寄,,1,,1,("],[")"]],
  [["寄,("],["),,1,,,,1,,2"]],
  [["寄,("],["),,2,,2"]],
  [["X<sup>"],["</sup>"]],
  [["寄REE("],[")"]],
  [["寄?("],[")"]],
  [["SCG("],[")"]],
  [["寄&%("],[")"]],
  [["Rayo("],[")"]],
  [["寄*~#@("],[")"]],
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
  360000,
  400000,
  420000,
  430000,
  450000,
  475000,
  500000,
  550000,
  551000,
  575000,
  576000,
  750000,
  751000,
  1000000,
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
  2000,
  1600,
  2000,
  1333.3334,
  1666.6667,
  1333.3334,
  1333.3334,
  1333.3334,
  1333.3334,
  0,
  1857.142858,
  0,
  2000,
  0,
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

function parse(n,first=false){
  if (first) {
    let norm = parse(n)
    if (n >= 5e5 & n < 5.5e5) norm = "数阵大小：" + norm
    if (n >= 550000 & n < 551000) norm = ">" + norm
    return norm
  }
  if(findLimit(n) == 0){
    return Math.floor(1/(1-(n/2000)))-1;
  } else if(n < limits[limits.length-1]) {
    return bits[findLimit(n)][0] + parse(LRemainder(n)) + bits[findLimit(n)][1];
  } else {
    return final;
  }
}

setInterval(function(){
  if (t < (limits[limits.length - 1])) t+= (Date.now() - now) / 10;
  t = Math.min(t,limits[limits.length - 1])
  localStorage.zia_lngi = t
  document.getElementById("num").innerHTML = parse(t,true);
  now = Date.now()
},10);

function setTime(x) {
  t = x
}