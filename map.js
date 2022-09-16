
const express=require('express')
const app=express();
const port=7000;

const names = ['divya','mamatha','sudhakar','sivaramarao'];

console.log(names);

const result = names.map(name => name.length > 4);

console.log(result);

app.listen(7000,()=>{
    console.log(`listening on port:${port}`)
})
