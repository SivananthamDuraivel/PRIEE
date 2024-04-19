const express = require('express')
const bcrypt=require('bcrypt')
const router=express.Router()
const {signup , signin, resetPassword} = require('../controllers/AuthController')

router.post('/signup',signup)
router.post('/signin',signin)
router.post('/resetPassword',resetPassword)

module.exports=router