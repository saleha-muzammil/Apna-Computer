const express = require('express') ;
const router = express.Router() ; 
const User= require('../models/user') ;

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

module.exports= router;
