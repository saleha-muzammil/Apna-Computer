const express = require('express') ;
const router = express.Router() ; 
const User= require('../models/user') ;
const Cpu= require ('../models/cpu') ;
const Cpucooler= require ('../models/cpucooler') ;
const Motherboard= require ('../models/motherboard') ;
const Cases= require ('../models/cases') ;
const Powersupply= require ('../models/powersupply') ;
const Videocard= require ('../models/videocard') ;
const Memory= require ('../models/memory') ;
const Storage= require ('../models/storage') ;
const Peripherals= require ('../models/peripherals') ;

router.post('/register', async (req, res)=>{
console.log(req.body) ;

try
{
    const user=User(req.body);
    let emailExists = await User.findOne({email: req.body.email});
    let usernameExists = await User.findOne({username: req.body.username});
    
    if (emailExists || usernameExists)
    {
        res.status(500).send('User with this email or username already exists.');
    }

    else
    {
        user.save();
        res.send('Success');
    }    
}

catch(err)
{
    res.json(err);
}

})

router.post('/login', async  (req, res)=>{
console.log(req.body) ;

try{
    let usernameExists = await User.findOne({username: req.body.username});
    
    if (usernameExists)
    {
    if (req.body.password === usernameExists.password)
    {
    console.log('hello')
    res.send('Success') ;
    }
    else 
    {
    res.status(500).send('Incorrect Password.' ) ;    
    }
    }
    else
    {
    res.status(500).send('Username doesnt exist.' ) ;
    }

}
catch(err)
{
    res.json(err);
}

})

// cpu
router.post('/cpu', async (req, res)=>{
console.log(req.body) ;

try
{
    const cpu=Cpu(req.body);
    cpu.save();
    res.send('Success');   
}

catch(err)
{
    res.json(err);
}

})

// cpu cooler 
router.post('/cpucooler', async (req, res)=>{
console.log(req.body) ;

try
{
    const item=Cpucooler(req.body);
    item.save();
    res.send('Success');   
}

catch(err)
{
    res.json(err);
}

})


// video card 
router.post('/videocard', async (req, res)=>{
console.log(req.body)

try
{
    const item=Videocard(req.body);
    item.save();
    res.send('Success');   
}

catch(err)
{
    res.json(err);
}

})
// memory 
router.post('/memory', async (req, res)=>{
console.log(req.body)

try
{
    const item=Memory(req.body);
    item.save();
    res.send('Success');   
}

catch(err)
{
    res.json(err);
}

})
//storage 
router.post('/storage', async (req, res)=>{
console.log(req.body)

try
{
    const item=Storage(req.body);
    item.save();
    res.send('Success');   
}

catch(err)
{
    res.json(err);
}

})
// peripherals 
router.post('/peripherals', async (req, res)=>{
console.log(req.body)

try
{
    const item= Peripherals(req.body);
    item.save();
    res.send('Success');   
}

catch(err)
{
    res.json(err);
}

})

//motherboard 
router.post('/motherboard', async (req, res)=>{
console.log(req.body)

try
{
    const item=Motherboard(req.body);
    item.save();
    res.send('Success');   
}

catch(err)
{
    res.json(err);
}

})
// cases
router.post('/cases', async (req, res)=>{
console.log(req.body)

try
{
    const item=Cases(req.body);
    item.save();
    res.send('Success');   
}

catch(err)
{
    res.json(err);
}

})
//powersupply

router.post('/powersupply', async (req, res)=>{
console.log(req.body)

try
{
    const item=Powersupply(req.body);
    item.save();
    res.send('Success');   
}

catch(err)
{
    res.json(err);
}

})








// extra 
router.get('/test', async (req, res) => {
  try {
  
    User.find((err, users) => {
      if (err) {
        res.status(500).send('Error encountered.');
        console.log('error in fetching database.');
      } else {
        console.log('sending');
        console.log('Users:', users);
        res.json(users);
      }
    });
  } catch (err) {
    console.log('error');
    res.json(err);
  }
});




module.exports= router;
