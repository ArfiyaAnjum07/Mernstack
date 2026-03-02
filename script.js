// /*let a=10
// {
//     let a=20
//     console.log(a)
// }
// console.log(a)*/
// /*let obj1={
//     name: 'abc',
//     age:22
// }
// let obj2=obj1
// obj2.name='xyz';
// console.log(obj1.name)
// if(0)
// {
//     console.log('true')
// }
// if(1)
// {
//     console.log("false")
// }*/
// console.log(5+'5')
// console.log(5-'5');      
// console.log(5=='5')

// let arr=[1,'new',2,'3']
// console.log(arr);

// let mark=30
// if(mark>=40){
//     console.log('pass')
// }
// else{
//     console.log('fail')
// }
// let result=mark>=40?'pass':'fail'
// console.log(result); 
// let num=[1,2,3,4,5,6,7,8]
// let obj={
//     name:'abc',
//     state:{
//         city:'ASD'
//     },
//     age:22
// }
// console.log(obj?.state?.city)
//console.log(20)

// let marks=30
// if(marks>=40)
// {
//     console.log('pass')
// }
// else{
//     console.log('fail')
// }

// let arr=[1,2,3,4,5]
// const addone=(num)=>{return num+1}
// let res=arr.map(addone)
// let double=arr.map((num)=>num*2)
// console.log(double)
// let multiply=arr.map((num)=>num*5)
// console.log(multiply)

let products=[
    {id:1,name:'laptop',price:25000},
    {id:2,name:'mobile',price:10000},
    {id:3,name:'keyboard',price:5000},
]

let product=products.filter((p)=>p.price>6000)
console.log(product)

let productName=products.map((product)=>{console.log(product.name)})

let arr=[1,2,3,4,5,6]
let b=arr.filter((num)=>num>3)
console.log(b)

let c=arr.filter((num)=>num%2)
console.log(c)

let a=[1,2,3,4,5,6]
let sum=a.reduce((total,curr)=>{return total+curr},1)
console.log(sum)

console.log('hello');
setTimeout(()=>{
    console.log("will log after 2 seconds")
},2000)
console.log('end')