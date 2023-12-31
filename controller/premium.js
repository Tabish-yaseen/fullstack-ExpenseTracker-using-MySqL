const User=require('../model/user')
const Expense=require('../model/expense')
const sequelize = require('sequelize')


exports.showLeaderBoard=async(req,res)=>{
    try{
        const showLeaderBoardOfUsers=await User.findAll({
             order:[[sequelize.literal('totalExpenses'), 'DESC']]


        })
       
        res.status(200).json(showLeaderBoardOfUsers)

    }catch(err){
        res.status(500).json(err)
    }
}