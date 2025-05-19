var arr=[10,20,30,40,50,]
for(var index in arr){
    console.log(index)}
for(var key of arr){
    console.log(key)}
var obj={Name:"Sundari",Dept:"Computer Science",Rollno:"23CS020"}
for(var key in obj){
    console.log(key)
    console.log(obj[key])
}
var arr=[1,2,3,4,5]
var arr2=[...arr,6,7,8,9,10]
console.log(arr2)
var marks=[90,97,98,99,"fail"]
var [m1,m2,m3,m4,m5]=marks;
console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)
console.log(m5)
let names=["varsa","sundari","ananthi","renu"]
let [n1,n2,n3,n4]=names;
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)
function sayBye(){
    console.log("Bye")
}
function demo(name,callback){
    console.log("hello"+ name)
    callback()
}
demo("vicky",sayBye);
function glow(){
    console.log("Sum")
}
function display(callback){
    console.log("10")
    callback()
}
display(glow)
const btn=document.getElementById("btn1");
btn.onclick=function(){
    window.open("https://www.instagram.com/")
    alert("welcome to instagram")
}
