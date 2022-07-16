const  express = require('express')
const router = express.Router()

const  connection = require('../db_config')



// get employees 
router.get('/', (req, res, next) =>{
    const fetchQ = "SELECT * FROM employees"

    connection.query(fetchQ, (err, data) =>{
        if(err){
            console.log(err)
            res.status(400).send('cannot fetch data something is wrong')
        }else{
            res.send({data})
        }
    })
})

// get single employee
router.get('/:id', (req, res, next) =>{
    const id =  req.params.id

    const fetchQ = "SELECT * FROM employees WHERE id ="+id

    connection.query(fetchQ, (err, data) =>{
        if(err){
            console.log(err)
            res.status(400).send('cannot fetch  single data something is wrong')
        }else{
            res.send({data})
        }
    })
})


// create employee
router.post('/create', (req, res, next) =>{
    // create the employee obj
    const employee = {
        name: req.body.name,
        age: req.body.age,
        country: req.body.country,
        position: req.body.position,
        wage: req.body.wage
    }

    //   create connection string

    const createQ = "INSERT INTO employees (name, age, country, position, wage) VALUES(?,?,?,?,?)"

    // query the  create string

    connection.query(createQ,
     [employee.name, employee.age, employee.country, employee.position, employee.wage],
     (err, data) =>{
        if(err){
            console.log(err)
            res.status(400).send('bad request something went wrong')
        }else{
            res.send({msg: 'employee is added', data})
        }
    })
})






module.exports = router