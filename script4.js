let base=prompt("Enter base: ");
base=Number(base);
let distance=prompt("Enter distance: ");
distance=Number(distance);
let Seed=prompt("Enter Seed: ");
Seed=Number(Seed);
let minutesLate=prompt("Enter minutesLate: ");
minutesLate=Number(minutesLate);
if (base >= 1 && base <= 1000 &&
    distance >= 0 && distance <= 100 &&
    minutesLate >= 0 && minutesLate <= 120 &&
    Seed >= 0 && Seed <= 9){
    let fare=base+7*distance;
    if (minutesLate>15){
        fare+=20;
    }
    if (distance>10){
        fare=Math.floor(0.1*fare);
    }
    if (Seed%2==0){
        fare+=Seed;
    }
    else if (Seed%2!=0){
        fare-=Seed;
    }
    if (fare%5!=0){
        fare+=5-(fare%5);
    }
    alert(fare);
}
else{
    alert("Wrong Input");
}
