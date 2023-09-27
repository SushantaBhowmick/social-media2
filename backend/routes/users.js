const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcryptjs')

//update user,
router.put("/:id",async(req,res)=>{
    if(req.body.userId === req.params.id || req.user.isAdmin){
        if (req.body.password) {
            try {
                console.log(req.body.password)
              const salt = await bcrypt.genSalt(10);
              req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
              return res.status(500).json(err);
            }
          }
          try {
            const user = await User.findByIdAndUpdate(req.params.id, {
              $set: req.body,
            });
            res.status(200).json("Account has been updated");
          } catch (err) {
            return res.status(500).json(err);
          }
    }else{
        return res.status(403).json("You can update only your account!");
    }
    const user = await User

})
//delete usr 
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Account has been deleted");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You can delete only your account!");
    }
  });

//get a usr 
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({message:"User Not found"});
        }
    const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other)
    } catch (error) {
        
    }
    
  });

//get all usr 
// router.get("/all", async (req, res) => {
//     try {
//         const users = await User.find({});
       
//         res.status(200).json(users)
//     } catch (error) {
//         res.json(error)
//     }
    
//   });

  
//follow a user

router.put("/follow/:id", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you allready follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
});


//unfollow a user

router.put("/unfollow/:id", async (req, res) => {
 if(req.body.userId !== req.params.id){
  try {
    const user = await User.findById(req.params.id);
  const currentUser = await User.findById(req.body.userId);
  if(user.followers.includes(req.body.userId)){
    await user.updateOne({$pull:{followers:req.body.userId}});
    await currentUser.updateOne({$pull:{followings:req.params.id}});
    res.status(200).json("user has unfollowed")
 }else {
      res.status(403).json(`you didn't follow ${user.username}`);
    }
  } catch (error) {
    
  }
 }else{
  res.status(403).json("you cant unfollow yourself");
 }
});

module.exports = router;