
const express=require('express')
const app=express();
const port=8000;

const names = ['divya','mamatha','sudhakar','sivaramarao'];

const result = names.filter(name => name.length > 7);

console.log(result);

app.listen(8000,()=>{
    console.log(`listening on port:${port}`)
})
