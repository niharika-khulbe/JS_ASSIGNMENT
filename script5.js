let Seed=prompt("Enter Seed: ");
Seed=Number(Seed);
let N=prompt("Enter N: ");
N=Number(N);
if (N >= 1 && N <= 1000000 && Seed >= 0 && Seed <= 9){
    let Sum=0;
    let m=1;
    let div=Seed+2;
    while (Sum<N){
        if (m%div!=0){
            Sum+=m;
        }
        m++;
    }
    alert(m-1+" "+Sum);
}
else{
    alert("Wrong Input");
}
