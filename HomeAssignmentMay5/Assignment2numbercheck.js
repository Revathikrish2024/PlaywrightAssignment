function CheckNumberType(num){
if(num==0){
    console.log("The number is Neutral");
}else if (num>0){
    console.log("The number is positive");
}else if(num<=0){
    console.log("The number is negative");
}else{
    console.log("The number is invalid");
  }
}
let num='1';
    CheckNumberType(num);