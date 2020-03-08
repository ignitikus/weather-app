const passport = require('passport')
const User = require('../models/User')
const faker = require('faker')



module.exports = {
   getHome: (req, res, next)=> {
      res.render('user/login', { title: 'Login' });
   },

   getRegister: (req, res, next)=> {
      res.render('user/register', { title: 'Register' });
   },

   get403: (req,res)=>{
      res.render('403')
   },
   
   login: passport.authenticate('local-login', {
      successRedirect: '/weather',
      failureRedirect: '/',
      failureFlash: true
   }),

   register: async({body:{email, name, password, homeCity}},res,next) => {
      let user = await User.findOne({email: email})
      try {
         if(user) return res.status(500).json({message:'User already exists'})

         user = await User.create({
            ['profile.name']: name,
            ['profile.picture']: faker.image.avatar(),
            email,
            password,
            homeCity,
            cities: homeCity
         })
         return res.redirect('/weather')
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