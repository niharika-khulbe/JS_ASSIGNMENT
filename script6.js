let a=parseInt(prompt("enter the value of a:"));
let b=parseInt(prompt("enter the value of b:"));
let c=parseInt(prompt("enter the value of c:"));
let score = 3*a+b-2*c;
if(score<0){
  score=0;
}
if(a+b+c>50){
    score =score-10;
}
if(score>=60){
    alert(score+" ,PASS");
}
else{
    alert(score+" ,FAIL");
}




