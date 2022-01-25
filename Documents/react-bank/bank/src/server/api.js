const express = require('express');
const Transaction = require('../model/transaction');
const router = express.Router();


router.get('/transactions',function(req,res){



router.post('/transaction',function(req,res){


router.delete('/transaction',function(req,res){