const express=require('express')
const app=express();
 const port=8000;
 app.get('/',(req,res)=>{
    const names = ['divya','mamatha','sudhakar','sivaramarao'];
console.log(names)
const result = names.find((name) =>
{
     return name=='mamatha'
    });
res.send(result)
console.log(result);
 })
app.listen(8000,()=>{
    console.log(`listening on port:${port}`)
})
  