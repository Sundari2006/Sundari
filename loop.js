var i=10
if(i%2==0)
{
    console.log("even")

}
else
{
    console.log("odd")
}
for(i=1;i<=10;i++)
{
    if(i%2==0)
    {
        console.log(`${i} is even`)
    }
    else
    {
        console.log( `${i} is odd`)
    }
}
n=1;
while(n<=10)
{
    if(n%2==0)
        console.log(`${n}is a even`)
    else
    console.log(`${n} is a odd`)
n++;
}
n=1;
do{
    if(n%2==0){
        console.log(`${n} is a even`)
    }
    else{
        console.log(`${n}is a odd`)
    }
    n++;
}while(n<=10)
    n=2;
    switch(n){
        case 1:
            console.log("Sunday")
            break;
        case 2:
            console.log("Monday")
            break;
        case 3:
            console.log("Tuesday")
            break;
        case 4:
            console.log("Wednesday")
            break;
        case 5:
            console.log("Thursday")
            break;
        case 6:
            console.log("Friday")
            break;
        case 7:
            console.log("Saturday")
            break
        default:
            console.log("Enter the valid number")
    }
    var sum =()=>{
    console.log(10+20)
}
sum()
i=20
var result=(i%2==0)?"even":"odd"
console.log(result)
sum=0;
for(i=1;i<=20;i++)
{
    if(i%2==0){
        console.log(`${i} is even`)
    sum=sum+i;
    }
}
console.log(`sum is ${sum}`)

