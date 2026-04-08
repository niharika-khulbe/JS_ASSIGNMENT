function palindrome(n){
    let m=n;
    let d=0;
    while (n!=0){
        d=10*d+(n%10);
        n=Math.floor(n/10);
    }
    if (d==m){
        return true;
    }
    else{
        return false;
    }
}
let K=prompt("Enter K: ");
K=Number(K);
let N=prompt("Enter N: ");
N=Number(N);
if (N>=1 && N<=1000000 && K>=2 && K<=9){
    let X=0;
    let flag=0;
    while (X<=100000){
        if (palindrome(N+X)&& (N+X)%K==0){
            alert(X);
            flag=1;
            break;
        }
        X++;
    }
    if (flag==0){
        alert("-1");
    }
}
else{
    alert("Wrong Input!");
}
