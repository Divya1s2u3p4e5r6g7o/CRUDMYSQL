const sql=require('../config/db');
const empmodel=require('../models/employee.model');

exports.CreateEmployee= (req,res) =>{
    sql.query('insert into employee set?',req.body,function(err,records,fields){
        if(err){
            console.log(err);
            res.send({
                status:500,
                result:'failure',
                response:"failure"
            })
        }

        else{

            if(records.affectedRows){
                res.send({
                    status:200,
                    result:'success',
                    response:req.body.name +"added successfully"
                })
            }
            else
            {
                res.send({
                    status:500,
                    result:'failure',
                    response:'failure'
                })
            }

        }
    })
}