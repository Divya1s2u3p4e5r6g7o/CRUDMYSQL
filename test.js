// function user(){
//     return new Promise((reslove,reject)=>
//     {
//         reslove("hello user")
//     })
    
// }
// function user1(){
//     return new Promise((reslove,reject)=>
//     {
//         setTimeout(()=>{
//             reslove("hello user1")
//         },10000)
        
//     })
  
// }
// function user2(){
//     return new Promise((reslove,reject)=>
//     {
//         reslove("hello user2")
//     })

// }

//  async function usercalling(){
//     const data=await Promise.all([user1(),user(),user2()]).then(value =>{
//         return value

//     })
//     console.log(data)


// }
// usercalling()

function s(){
    console.log("hii")
    
}
function s1(n1,n2,callback){
    let sum;
    setTimeout(()=>{  console.log( sum =n1+n2)
},10)
callback(sum)
}


s1(5,5,s)


// try{

//     s(s1)

// }catch(e){
//     console.log(e);
// }





