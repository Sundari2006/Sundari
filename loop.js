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
            continue;
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