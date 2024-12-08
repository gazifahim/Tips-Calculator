const bill= document.getElementById("bill");
const tip = document.getElementById("tip");
const total = document.getElementById("total");

function calculate(){
    const bill1=Number(bill.value);
    const tip1=Number(tip.value);
    total.innerHTML=bill1*(tip1/100)+bill1;
}