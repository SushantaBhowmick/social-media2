const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs');


//Register
router.post("/register",async(req,res)=>{

   try {
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt)

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    })
    const user = await newUser.save();
    res.status(201).json(user)
   } catch (error) {
    res.status(500).json(err)
   }
})

//Login
router.post("/login",async(req,res)=>{

   try {
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(404).json({message:"User Not found"});
    }
    const validPassword = await bcrypt.compare(password,user.password)
    if(!validPassword){
        return res.status(404).json({message:"Invalid Credentials"});
    }
    res.status(200).json({
        message:`Welcome Back ${user.username}`,
        user
    })
   } catch (error) {
    res.status(500).json(err)
   }
})

module.exports = router;
