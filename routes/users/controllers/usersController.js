const passport = require('passport')
const User = require('../models/User')
const faker = require('faker')
const cities = require('../../../lib/cities')


module.exports = {
   getHome: (req, res, next)=> {
      res.render('user/login', { title: 'Login' });
   },

   getRegister: (req, res, next)=> {
      res.render('user/register', { title: 'Register'});
   },

   get403: (req,res)=>{
      res.render('403')
   },

   getProfile: async (req,res,next) => {
      try {
         let foundUser = await User.findOne({email: req.user.email})
         res.render('user/profile', {foundUser})
      } catch (error) {
         console.log(error)
         return next(error)
      }
   },
   
   
   login: passport.authenticate('local-login', {
      successRedirect: '/weather',
      failureRedirect: '/',
      failureFlash: true
   }),

   register: async(req,res,next) => {
      try {
         let user = await User.findOne({email: req.body.email})
         if(user) return res.status(500).json({message:'User already exists'})

         user = await User.create({
            ['profile.name']: req.body.name,
            ['profile.picture']: faker.image.avatar(),
            email: req.body.email,
            password: req.body.password,
            homeCity: cities[Math.floor(Math.random()*6)].name,
         })
         req.login(user, (err) => {
            if(err) return next(err)
            return res.redirect('/weather')
         })
      } catch (error) {
         return next(error)
      }
   },

   logout: (req,res) => {
      req.session.destroy()
      req.logout()
      return res.redirect('/')
   }
}