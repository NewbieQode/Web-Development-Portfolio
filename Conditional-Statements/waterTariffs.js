
let Lwater = Number(prompt("how many litres of water have you used?"));

step6 = 15.73;
step10 = 22.38;
step35 = 31.77;
stepPlus = 69.76;

if (Lwater <= 6) {
    let wBill = Lwater * step6;
    console.log("R" + wBill);
}
else if (Lwater >6 && Lwater <= 10.5) {
    let wBill = Lwater * step10;
    console.log("R" + wBill);
}
else if (Lwater >10.5 && Lwater <= 35) {
    let wBill = Lwater * step35;
    console.log("R" + wBill);
}
else if (Lwater >35) {
    let wBill = Lwater * stepPlus;
    console.log("R" + wBill);
}