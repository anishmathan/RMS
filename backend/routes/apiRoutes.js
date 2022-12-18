const express=require('express');
// const router=require('Router')
const router = express.Router();

const userSchema = require("../db/registration");

router.post('/register', async (req, res) => {
    console.log(req.body);
    const user = new userSchema({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Password: req.body.Password,
        ConfirmPassword:req.body.ConfirmPassword,
        Qualification: req.body.Qualification,
        Skills:req.body.Skills,
        YearOfPassing:req.body.YearOfPassing,
        Experience:req.body.Experience,
        Language:req.body.Language,
    })

    await user.save()
    res.status(200).json({
      success: true,
      status: 200,
      message: "User Register Successfully",
      user
})
})


router.post('/login', async (req, res) => {
    console.log(req.body);
    const { Email, Password } = req.body;
    if (!Email || !Password) {
      return res.status(400).json({
        message: "Please Provide Required Information",
      });
    }
    else {
    }
    const checkEmail = await regSchema.findOne({ Email });
    if (checkEmail) {
      res.status(200).json({
        success: true,
        message: "Success",
      })
    }
    else {
      res.status(400).json({
        success: false,
        
        message: "Email already Exist",
      })
    }
  })

module.exports=router;