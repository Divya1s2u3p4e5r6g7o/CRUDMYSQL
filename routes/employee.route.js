const express=require('express');
const router=express.Router();

module.exports=(app) =>{
    var employeecontroller=require('../controllers/employee.controller');
    router.post('/addemployee',employeecontroller.CreateEmployee);
    app.use('/api/employee',router);
}