const express=require('express')
const router=express.Router()
const dietplan=require('../models/dietPlanModel')
const{ createPlan, getAllPlan, getOnePlan, deletePlan, updatePlan }=require('../controllers/dietPlanController')

router.get('/',getAllPlan);

router.get('/:id',getOnePlan);

router.post("/",createPlan);

router.delete("/:id",deletePlan);

router.put("/:id",updatePlan);

module.exports=router