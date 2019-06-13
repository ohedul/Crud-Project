const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDb',{useNewUrlParser: true, useFindAndModify: false}, (err)=>{
    if(err){
        console.log('Error happend: ' + err);
    }
    else{
        console.log('Successfully connected to database');
    }
});

require('./employee.model');