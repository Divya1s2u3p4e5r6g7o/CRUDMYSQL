// /*require dotenv to load .env file*/
// require('dotenv').config()

// /*Intializing Express*/ 
// const express=require('express');
// const app=express();

// /*  Initializing CORS*/ 
// const cors=require('cors');
// app.use(cors(

//     {'allowedHeaders':['sessionId','Content-Type','authorization'],
//     'exposedHeaders':['sessionId'],
//     'origin':'*',
//     'methods':['GET','HEAD','POST','PUT','DELETE','PATCH'],
//     'preflightContinue':false,
//     'Access-Control-Allow-Headers':'Content-Type',
//     'Access-Control-Allow-Methods':['GET','POST'],
//     'Access-Control-Allow-Origin':'*',

//     }
// ))

// /*Initializing BodyPraser */
// const bodyParser=require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

// app.listen(6000);
//     console.log('Server listening on port',+ 6000);

//     var employeeroutes=require('./routes/employee.route')(app)// importing route




 function getuser(){
    setTimeout(()=>{
        console.log("return the userinfo ")

    },1000);
}

function getuserContacts(){
    console.log("return the contacts of the user")
}


// getuser();
// getuserContacts();
try{
    console.log("return the user ")
    getuser()
}
catch(e){
    console.log("error")

}
getuserContacts();


// // promises
// async function user(){
//  var user= await new Promise(resolve => setTimeout(resolve, 1000))
// .then(()=>{
   
//     getuserContacts();

// }).catch((e)=>{
//     console.log(e)

// })
// }
// user();







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
//         },1000)
        
//     })
  
// }
// function user2(){
//     return new Promise((reslove,reject)=>
//     {
//         reslove("hello user2")
//     })

// }

//  async function usercalling(){
//     const data=await Promise.all([user,user1,user2]).then(value =>{
//         return value
//     })

    
//     console.log(data)


// }
// usercalling()



