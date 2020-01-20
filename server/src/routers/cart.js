const express = require('express')
const carts = require('../models/cart')
const auth = require('../middleware/auth')
const cartRouter = new express.Router()


cartRouter.post('/cart', auth, async (req, res)=>{

  const cart = new carts({
    ...req.body,
    owner: req.user._id      
  })
  
    try {
      await cart.save()
      res.status(201).send(cart)
    } catch(e) {
      res.status(400).send(e)
    }
  })

  cartRouter.get('/cart', auth, async (req, res)=>{
  const cart = await carts.find()
      res.send(cart)
  })
  

  cartRouter.patch('/cart/:id', auth, async (req, res)=>{
    const Updates = Object.keys(req.body)
    const allowedUpdates = ['quantity']
    const isValidOperation = Updates.every((update) => allowedUpdates.includes(update))
  
    
    if(!isValidOperation) {
      return res.status(400).send({error: 'Invalid Updates'})
  }
  
    try {
        const cart = await carts.findOne({ _id: req.params.id, owner: req.user._id })
       
      if(!cart){
        return res.status(404).send()
      }
  
      Updates.forEach((update) => cart[update] = req.body[update])

        await cart.save()

      res.send(cart)
    } catch(e){
        res.status(400).send(e)
    }
  })
  
  cartRouter.delete('/cart/:id', auth, async (req,res)=>{
    try {
      const cart = await carts.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
      
      if(!cart) {
        return res.status(404).send()
      }
  
      res.send(cart)
    } catch(e) {
      res.status(400).send(e)
    }
  })

  module.exports = cartRouter