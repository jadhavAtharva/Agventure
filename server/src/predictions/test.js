const express = require('express')
const spawn = require('child_process').spawn;

const app = express()

app.use(express.json())

var a = 0

app.get('/crop', (req,res) =>{

    console.log(req.body.test)
     const process = spawn('python', ['cropped.py',a,7,26,45,58,1.85,60]);
     //req.body.season,req.body.ph,req.body.temp,req.body.humidity,req.body.rainfall,req.body.yield,req.body.water
    process.stdout.on('data', function(data) {

       const temp = data.toString().replace(/[^a-zA-Z ]/g, "")
    //    console.log(temp)
    //    var buff1 = Buffer.from('Maize')
    //    var x = Buffer.compare(temp, buff1)
    //    if (x) {
            res.send(`The best crop suited for the conditions is ${temp}.`)
    //    }
        
    })
    
    })

    app.get('/test', (req,res) =>{

        const process = spawn('python', ['fertilizerpred.py',0.9, 0.4, 0.3, 0.4, 0.2, 0.6, 0.7, 0.4, 0.9]);
        
        process.stdout.on('data', function(data) {

                var buff = Buffer.from('2')
                var x = Buffer.compare(data, buff)
                if(x) {
                    res.send('Nitrogeous Fertilizer')
                }
        })
        
        })    

app.listen(5000, ()=>{
    console.log('Server is running!')
})


// 0 - winter
// 1 - rainy
// 2 - summer
