const express = require('express')
const bcrypt=require('bcrypt')
const router=express.Router()
const {signup , signin, resetpassword,newPassword} = require('../controllers/AuthController')

router.post('/signup',signup)
router.post('/signin',signin)
router.post('/resetPassword',resetpassword)
router.post('/newPassword/:token',newPassword)

module.exports=router